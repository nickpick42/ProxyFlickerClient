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

module.exports = ProxyFlickerClient