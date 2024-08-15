/*
 * @Author: 祝占朋 wb.zhuzhanpeng01@mesg.corp.netease.com
 * @Date: 2024-01-09 15:28:56
 * @LastEditors: Ianarua 306781523@qq.com
 * @LastEditTime: 2024-07-31 20:21:13
 * @FilePath: front_end/src/services/urlConfig.ts
 * @Description:
 */

enum EUrlType {
  POST = 'post',
  GET = 'get',
}

enum EUrlKey {
  checkLogin = 'checkLogin',
  getLoginInfo = 'getLoginInfo',
  kbList = 'kbList',
  createKb = 'createKb',
  uploadFile = 'uploadFile',
  deleteKB = 'deleteKB',
  deleteFile = 'deleteFile',
  uploadUrl = 'uploadUrl',
  kbConfig = 'kbConfig',
  fileList = 'fileList',
  createBot = 'createBot',
  updateBot = 'updateBot',
  queryBotInfo = 'queryBotInfo',
  deleteBot = 'deleteBot',
  uploadFaqs = 'uploadFaqs',
  getFile = 'getFile',
  getDocCompleted = 'getDocCompleted',
  updateDocCompleted = 'updateDocCompleted',
  clearUpload = 'clearUpload',
  sendQuestion = 'sendQuestion',
}

interface IUrlValueConfig {
  type: EUrlType;
  url: string;
  showLoading?: boolean;
  loadingId?: string;
  // errorToast?: boolean;//默认开启
  cancelRepeat?: boolean;
  sign?: boolean; // 是否开启签名
  param?: any;

  [key: string]: any;
}

type IUrlConfig = Record<EUrlKey, IUrlValueConfig>;

import services from '.';

export const userId = 'zzp';

//ajax请求接口
const urlConfig: IUrlConfig = {
  checkLogin: {
    type: EUrlType.GET,
    url: '/checkLogin.s',
  },
  getLoginInfo: {
    type: EUrlType.POST,
    url: '/j_spring_security_check',
  },
  // 获取知识库列表
  kbList: {
    type: EUrlType.POST,
    url: '/local_doc_qa/list_knowledge_base',
    showLoading: true,
    param: {
      user_id: userId,
    },
  },
  // 新建知识库
  createKb: {
    type: EUrlType.POST,
    url: '/local_doc_qa/new_knowledge_base',
    showLoading: true,
    param: {
      user_id: userId,
    },
  },
  // 上传文件
  uploadFile: {
    type: EUrlType.POST,
    url: '/local_doc_qa/upload_files',
    param: {
      user_id: userId,
    },
  },
  // 删除知识库
  deleteKB: {
    type: EUrlType.POST,
    url: '/local_doc_qa/delete_knowledge_base',
    param: {
      user_id: userId,
    },
  },
  // 删除文件
  deleteFile: {
    type: EUrlType.POST,
    url: '/local_doc_qa/delete_files',
    showLoading: true,
    param: {
      user_id: userId,
      kb_id: '',
      file_ids: [],
    },
  },
  // 上传网页文件
  uploadUrl: {
    type: EUrlType.POST,
    url: '/local_doc_qa/upload_weblink',
    param: {
      user_id: userId,
    },
  },
  kbConfig: {
    type: EUrlType.POST,
    url: '/local_doc_qa/rename_knowledge_base',
    showLoading: true,
    param: {
      user_id: userId,
      kb_id: '',
      new_kb_name: '',
    },
  },
  //获取知识库已上传文件状态
  fileList: {
    type: EUrlType.POST,
    url: '/local_doc_qa/list_files',
    param: {
      user_id: userId,
      kb_id: '',
    },
  },
  // 创建Bot
  createBot: {
    type: EUrlType.POST,
    url: '/local_doc_qa/new_bot',
    param: {
      user_id: userId,
    },
  },
  // 更新Bot
  updateBot: {
    type: EUrlType.POST,
    url: '/local_doc_qa/update_bot',
    param: {
      user_id: userId,
    },
  },
  // 获取Bot信息/列表
  queryBotInfo: {
    type: EUrlType.POST,
    url: '/local_doc_qa/get_bot_info',
    param: {
      user_id: userId,
    },
  },
  //删除Bot
  deleteBot: {
    type: EUrlType.POST,
    url: '/local_doc_qa/delete_bot',
    param: {
      user_id: userId,
    },
  },
  //上传faq
  uploadFaqs: {
    type: EUrlType.POST,
    url: '/local_doc_qa/upload_faqs',
    param: {
      user_id: userId,
    },
  },
  //获取文件base64
  getFile: {
    type: EUrlType.POST,
    url: '/local_doc_qa/get_file_base64',
    param: {
      user_id: userId,
    },
  },
  // 获取文档解析内容（chunk）
  getDocCompleted: {
    type: EUrlType.POST,
    url: '/local_doc_qa/get_doc_completed',
    param: {
      user_id: userId,
    },
  },
  // 修改文档解析内容（chunk）
  updateDocCompleted: {
    type: EUrlType.POST,
    url: '/local_doc_qa/update_chunks',
    param: {
      user_id: userId,
    },
  },
  // 取消知识库所有文件上传
  clearUpload: {
    type: EUrlType.POST,
    url: '/local_doc_qa/clean_files_by_status',
    param: {
      user_id: userId,
    },
  },
  // 发送问题，非流式需要用这个
  sendQuestion: {
    type: EUrlType.POST,
    url: '/local_doc_qa/local_doc_chat',
    param: {
      user_id: userId,
    },
  },
};

// 使用映射类型来创建一个类型，该类型将urlConfig中的每个键映射到IRequestMethod类型
type UrlRequestMethods = {
  [K in keyof typeof urlConfig]: any;
};

const urlResquest: UrlRequestMethods = {} as UrlRequestMethods;
Object.keys(urlConfig).forEach(key => {
  urlResquest[key] = (params: any, option: any = {}) => {
    const { type, url, param, ...other } = urlConfig[key];
    return services[type](url, { ...param, ...params }, { ...other, ...option });
  };
});
export default urlResquest;