import Config from '../Config';
import {postsDetails} from '../Test';
let postsList = [];
const FetchPosts = (mock) => {
    if(mock) {
        return postsDetails;
    }
    /*()=> {
        Promise.all(getPosts());
    }()*/
    getPosts();
    console.log('API Call Finished: ' + new Date());
    return postsList;
}

const getPosts = () => {
    let accessToken = window.sessionStorage.getItem("access-token");
    let getPostsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Posts").uri.replace('$accessToken', accessToken);
    let getPostDetailsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Post Details").uri.replace('$accessToken', accessToken);
    //Promise.all(
        fetch(getPostsURI)
            .then(response => response.json())
            .then(response => {
                Promise.all(
                    response.data.map(post => {
                        fetch(getPostDetailsURI.replace('$postId', post.id))
                            .then(response => response.json())
                            .then(response => {
                                response.caption = post.caption;
                                response.comments = [];
                                response.isLiked = false;
                                post.numLikes = Math.round(100 + Math.random() * 100)
                                postsList.push(response);
                            })
                            .catch(error => console.log('Error in Get Post Details:', error))
                    })
                )
            })
            .catch(error => console.log('Error is List Posts:', error))
    //);
}

export default FetchPosts;