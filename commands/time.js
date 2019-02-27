const axios = require('axios');

exports.run = async(client, message) => {
    axios.get(`https://arcadia-api.xyz/api/v1/time?url=${message.author.displayAvatarURL}`, {
        headers: {
            Authorization: "5d77b51dd31b1566b62fd4e3408110d4c3ad8cf8c8c0f8525c0a8d5a9f1554a7"
        },
        responseType: 'arraybuffer'
    }).then(async(res) => {
        message.channel.send({
            files:[{
                attachment: await res.data,
                name: 'i.png'
            }]
        });
    })
};