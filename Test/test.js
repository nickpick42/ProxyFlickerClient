const ProxyFlickerClient = require("proxyflickerclient")

const main = async()=>{
    let proxyFlickerClient = new ProxyFlickerClient("modemAuthID")
    let health = await proxyFlickerClient.health()
    let reset = await proxyFlickerClient.reset("modemAlias","quick_reset")
    console.log(reset)
}
main()