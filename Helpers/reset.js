const axios = require("axios")

const main = async(modemAuthID, alias,reset_type)=>{

    return axios("https://backend.proxyflicker.com/api/reset",{
        method:"POST",
        headers:{
            "authorization":`Bearer ${modemAuthID}`
        },
        data:{
            alias,
            reset_type
        }
    }).then (r=>r.data)

}
module.exports = main