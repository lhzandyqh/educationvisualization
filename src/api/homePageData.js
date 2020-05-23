import request from '@/utils/request'

// 获取今日信息
export function getTodayData (parems) {
  return request({
    url: '/campus/getTodayInfo',
    method: 'get',
    params: parems
  })
}

// 获取学生出勤情况
export function getAttendance (parems) {
  return request({
    url: '/campus/getAttendanceByMonth',
    method: 'get',
    params: parems
  })
}

// 获取最新考试学生成绩
export function getNewExamGrade (parems) {
  return request({
    url: '/campus/getScoreBylastTime',
    method: 'get',
    params: parems
  })
}

// 获取工作类别占比
export function getWorkDis (parems) {
  return request({
    url: '/campus/getTeacherWorkPercent',
    method: 'get',
    params: parems
  })
}

// 获取教师工作量
export function getTeacherWorkNum (parems) {
  return request({
    url: '/campus/getTeacherWorkNum',
    method: 'get',
    params: parems
  })
}
