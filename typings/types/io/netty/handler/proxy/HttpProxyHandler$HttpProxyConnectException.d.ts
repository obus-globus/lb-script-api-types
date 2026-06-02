import type { ProxyConnectException } from '../../../../io/netty/handler/proxy/ProxyConnectException.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class HttpProxyHandler$HttpProxyConnectException extends ProxyConnectException {
    constructor(arg0: string, arg1: Map$Entry<string, string>[])
    // private headers: Map$Entry<string, string>[];
    headers(): Map$Entry<string, string>[];
}