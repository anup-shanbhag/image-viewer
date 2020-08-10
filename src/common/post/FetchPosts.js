import Config from '../Config';

const FetchPosts = () => {
    let accessToken = window.sessionStorage.getItem("access-token");
    let getPostsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Posts").uri.replace('$accessToken', accessToken);
    getPosts(getPostsURI);
}

const getPosts = (uri) => {
    fetch(uri)
        .then(response => response.json())
        .then(response => getPostsOK(response))
        .catch(error => getPostsNotOK(error));
};
let getPostsOK = response => {
    console.log(response);
    let accessToken = window.sessionStorage.getItem("access-token");
    let getPostDetailsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Post Details").uri.replace('$accessToken', accessToken);
    response.data.map(post => {
        fetch(getPostDetailsURI.replace('$postId', post.id))
        .then(response => response.json())
        .then(response => getPostDetailsOK(response))
        .catch(error => getPostsDetailsNotOK(error));
    })
}
let getPostsNotOK = error => console.log('Error is List Posts:', error);
let getPostDetailsOK = response => console.log(response);
let getPostsDetailsNotOK = error => console.log('Error in Get Post Details:', error);

/*const FetchPosts = () => {
    let accessToken = window.sessionStorage.getItem("access-token");
    let getPostsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Posts").uri.replace('$accessToken', accessToken);
    let getPostDetailsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Post Details").uri.replace('$accessToken', accessToken);
    let postsList = [];
    function onOK() {
        let data = JSON.parse(this.responseText);
        console.log(data);
        let postDetail=FetchPostDetails(data.data[0].id);
        postDetail.caption=data.data[0].caption;
        postsList.push(postDetail);
        console.log(postsList);
        /*data.data.map(post => {
            let postDetail=FetchPostDetails(post.id);
            postDetail.caption=post.caption;
        })
    }
    function onError(err) {
        console.log('Error Fetching Posts :-S', err);
    }
    let request = new XMLHttpRequest();
    request.onload = onOK;
    request.onerror = onError;
    request.open('get', getPostsURI, true);
    request.send();
}

const FetchPostDetails = (postId) => {
    let accessToken = window.sessionStorage.getItem("access-token");
    let getPostDetailsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Post Details").uri.replace('$accessToken', accessToken).replace('$postId',postId);
    let postDetail;
    function onOK() {
        let data = JSON.parse(this.responseText);
        //console.log(data);
        postDetail=data;

    }
    function onError(err) {
        console.log('Error Feching Post Details :-S', err);
    }
    let request = new XMLHttpRequest();
    request.onload = onOK;
    request.onerror = onError;
    request.open('get', getPostDetailsURI, true);
    request.send();
    return postDetail;
}*/
export default FetchPosts;