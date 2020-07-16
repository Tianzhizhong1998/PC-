import { get, post } from '../utils/http'
//查询各个课程下的模块所属类型接口
export const getTypeDic = params => get('http://192.168.5.53:8600/ideo-subject/subject/type/dic/getTypeDic/s_rw', params);
//人文科学
export const humanities = params => get('http://192.168.5.53:8600/ideo-subject/subject/humanities/listHumanitiesForWeb', params);

export const course = params => get('http://192.168.5.52:8600/ideo-subject/subject/course/listAllSubjectCourse', params);

export const incrementHumanitiesViewNumber = params => get('http://192.168.5.53:8600/ideo-subject/subject/humanities/incrementHumanitiesViewNumber', params);

export const operateLikesNumber = params => get('http://192.168.5.53:8600/ideo-subject/subject/humanities/operateLikesNumber/f2ef3d47bc5d452e8816c1e38a71e70f', params);


