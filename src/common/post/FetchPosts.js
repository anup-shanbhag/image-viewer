import Config from '../Config';
import { postsDetails } from '../Test';

// Makes API calls to both endpoints, merges results and returns it
const fetchPosts = (mock) => {
    let postsList = postsDetails;
    let accessToken = window.sessionStorage.getItem("access-token");
    let getPostsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Posts").uri.replace('$accessToken', accessToken);
    let getPostDetailsURI = Config.api.endpoints.find((endpoint) => endpoint.name === "Get Post Details").uri.replace('$accessToken', accessToken);
    if (!mock) {
        Promise.resolve(
            fetch(getPostsURI)
                .then(posts => posts.json())
                .then(posts => {
                    Promise.all(
                        posts.data.map(post => {
                            fetch(getPostDetailsURI.replace('$postId', post.id))
                                .then(details => details.json())
                                .then(details => {
                                    post.media_type = details.media_type;
                                    post.media_url = details.media_url;
                                    post.username = details.username;
                                    post.timestamp = details.timestamp;
                                    posts.comments = [];
                                    posts.isLiked = false;
                                    posts.numLikes = Math.round(100 + Math.random() * 100);
                                })
                                .catch(error => console.log('Error in Get Post Details:', error))
                        })
                    )
                    postsList = JSON.parse(JSON.stringify(posts.data));
                    console.log('1 ', posts.data);
                })
                .catch(error => console.log('Error is List Posts:', error)));
    }
    console.log('API Call Finished: ' + new Date());
    console.log('2 ', postsList);
    return postsList;
}

export default fetchPosts;