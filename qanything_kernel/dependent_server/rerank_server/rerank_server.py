import sys
import os

# 获取当前脚本的绝对路径
current_script_path = os.path.abspath(__file__)

# 将项目根目录添加到sys.path
root_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(current_script_path))))

sys.path.append(root_dir)
print(root_dir)

from sanic import Sanic
from sanic.response import json
from qanything_kernel.dependent_server.rerank_server.rerank_backend import RerankBackend
from qanything_kernel.utils.general_utils import safe_get

app = Sanic("rerank_server")


@app.route("/rerank", methods=["POST"])
async def rerank(request):
    # query = safe_get(request, "query")
    # passgaes = safe_get(request, "passages")
    data = request.json
    query = data.get('query')
    passages = data.get('passages')
    rerank_backend: RerankBackend = request.app.ctx.rerank_backend
    print("local rerank query:", query, flush=True)
    print("local rerank passages number:", len(passages), flush=True)
    # print("local rerank passages:", passages, flush=True)
    result_data = rerank_backend.get_rerank(query, passages)

    return json(result_data)


@app.before_server_start
async def init_local_doc_qa(app, loop):
    app.ctx.rerank_backend = RerankBackend(use_cpu=False)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8001, workers=2)