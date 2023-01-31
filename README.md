# ProxyFlicker 
[ProxyFlicker](https://www.proxyflicker.com/)

https://www.proxyflicker.com/


Easily control your proxyflicker modem proxies with our sdk

https://github.com/nickpick42/ProxyFlickerClient

## Installation

Use the package manager [npm] to install proxyflickerclient.

```bash
npm install proxyflickerclient
```

## Usage

```JavaScript
const ProxyFlickerClient = require("proxyflickerclient")

const main = async()=>{
    let proxyFlickerClient = new ProxyFlickerClient("modemAuthID")
    let health = await proxyFlickerClient.health()
    let reset = await proxyFlickerClient.reset("modemAlias","quick_reset")
    console.log(reset)
}
main()
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
