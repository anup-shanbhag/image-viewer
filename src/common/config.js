var config =
{
    "login": {
        "username": "anups.sd11",
        "password": "super.tester"
    },
    "auth": {
        "access-token": "IGQVJVTWpBeUFsQ0x4MXhLUlFIRGlHdXhZAT0ZARUGJZAYVBrSmwxMHlvcVVfYUZAWcVRiV0pKVEdVelcydVNXY2hCamJXbGJPdUg2dHgwWEYydFltOTdzbG5kOXhYTjRaZADNiUC1SWnExNXhmdXVtUjRlbk5WcnVhUGFqUHZAn"
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
export default config;