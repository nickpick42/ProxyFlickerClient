const health = require("./Helpers/health")
const reset = require("./Helpers/reset")

class ProxyFlickerClient {
    constructor(modemAuthID) {
        this.modemAuthID = modemAuthID
    }
    health = async ()=>{
        return await health(this.modemAuthID)
    }
    reset = async (alias, reset_type )=>{
        return await reset(this.modemAuthID,alias, reset_type)

    }
}

const main = async()=>{
    let proxyFlickerClient = new ProxyFlickerClient("a8fBAYgNvh")
    let health = await proxyFlickerClient.health()
    let reset = await proxyFlickerClient.reset("TzlXxR50z9","quick_reset")
    console.log(reset)
}
main()