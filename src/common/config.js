var Config =
{
    "login": {
        "username": "anups.sd11",
        "password": "super.tester"
    },
    "auth": {
        "access-token": "IGQVJVY2JjaGdGa1ZA2WElhMVBYbE9kWTlJRzd0dkNJbll2QjVMQXVTVU9SblQ5Qy0xZA3ZAsQVRTM0l6azN0Ymd3NHJtcDJOMDB1RzVQZA3k4S1h1dUJVaFU3eWlQNnlJbnZA1T0kweUpicnBtaENLSUcwYVhTZAWdZARnhDMlpR"
    },
    "api": 
    {
        "endpoints": 
        [
            {
                "name": "Get Posts",
                "uri": "https://graph.instagram.com/me/media?fields=id,caption&access_token=$accessToken"
            },
            {
                "name": "Get Post Details",
                "uri": "https://graph.instagram.com/$postId?fields=id,media_type,media_url,username,timestamp&access_token=$accessToken"
            }
        ]
    }
};
export default Config;