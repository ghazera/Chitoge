const axios = require('axios');

exports.run = async(client, message) => {
    axios.get(`https://arcadia-api.xyz/api/v1/convolute?url=${message.author.displayAvatarURL}`, {
        headers: {
            Authorization: "bfd5a6b1eb4668e015cf65549277e69793e477a7a7a4bddf53a1bbb70ce5b8a6"
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