var Config =
{
    "login": {
        "username": "anups.sd11",
        "password": "super.tester"
    },
    "auth": {
        "access-token": "IGQVJVU1JORWZA3dXE3aWd2SHFocV9jWkh3YmxRcGFNN2VtRHVaMTJCUml2dGRraW1fNHBYTk9nLWwyUXl6WnVLXzhISi1nOUFhQy1OLUxwWThqRmJqajhYemcxT3ZAyWnRpZAUpuaElIODBrZAlpqSE43WGx5cmVIRDFCMm9ZA"
    },
    "api": 
    {
        "mock": false,
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