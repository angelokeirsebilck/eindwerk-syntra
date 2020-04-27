import { API } from '../../config/API';

export const loadPosts = (pageNumber) => {
    return function (dispatch) {
        API.get("api/posts?page=" + pageNumber).then(response => {
            dispatch({
                type: "LOAD_POSTS",
                payload: response.data
            });
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }
}

export const loadPageCount = () => {
    return function (dispatch) {
        API.get("api/posts").then(response => {
            dispatch({
                type: "LOAD_PAGE_COUNT",
                payload: response.data
            });
            dispatch(loadPosts(1));
        }).catch(function (error) {
            // handle error
            console.log(error);
        })
    }
}

export const setCommentEditor = (editor) => {
    return{
        type: 'SET_COMMENT_EDITOR',
        payload: editor
    }
}

export const addPostAction = (postValues) => {
    API.post("api/posts", postValues).then(response => {

    }).catch(function (error) {
        // handle error
        console.log(error);
    });
}