const axios = require("axios")

const main = async (modemAuthID)=>{
    return axios("https://backend.proxyflicker.net/api/status",{
        method:"get",
        headers:{
            authorization:`Bearer ${modemAuthID}`
        }
    }).then ( (resp)=>{
        return (resp.data)
    })
}
module.exports = main;