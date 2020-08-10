var Config =
{
    "login": {
        "username": "anups.sd11",
        "password": "super.tester"
    },
    "auth": {
        "access-token": "IGQVJXcFFSamZAnR3BVUGgtdGE5RkNMN21FSTlwbmVsTGFVMXBCdHdNMmVFenpXejZANVFA2cUhNZA1FmQndlRXlnekM2WExxVmtITkxITE1uRkR5ZA25YNENrbXNMVlZAfUHpOUl9SSmZAxd3U1Vk55TGJEWkJfZAE0xcUw3cHlN"
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