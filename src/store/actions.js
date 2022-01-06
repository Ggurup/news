import { fetchUserInfo, fetchCommentItem, fetchList } from "../api";

export default {
        
        FETCH_USER( { commit }, name ) {
            return fetchUserInfo(name)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            });
        },
        FETCH_ITEM(context, id) {
            return fetchCommentItem(id)
            .then(res => {
                context.commit('SET_ITEM', res.data)
            })
        },
        FETCH_LIST({commit}, pageName) {
            return fetchList(pageName)
            .then(({ data }) => { 
                commit('SET_LIST', data)
                return {commit};
            })
            .catch(error => console.log(error));
        }
    
    }
       