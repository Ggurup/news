import axios from 'axios';

//1. HTTP Request & Resoponse와 관련된 기본설정 
const config = {
    baseUrl: 'https://api.hnpwa.com/v0/'
}
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchAskList() {
    return axios.get(`${config.baseUrl}ask/1.json`)
}
function fetchJobsList() {
    return axios.get(`${config.baseUrl}jobs/1.json`)
}
function fetchUserInfo(username) {
    return axios.get(`${config.baseUrl}user/${username}.json`)
}
function fetchCommentItem(id) {
    return axios.get(`${config.baseUrl}item/${id}.json`)
}
function fetchList(pageName) {
    return axios.get(`${config.baseUrl}${pageName}/1.json`)
}
//2. API 함수 정리 

export {
    fetchNewsList,
    fetchAskList,
    fetchJobsList,
    fetchUserInfo,
    fetchCommentItem,
    fetchList
}