import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { Authenticator } from '../../../../../java/net/Authenticator.d.ts'
import type { InetSocketAddress } from '../../../../../java/net/InetSocketAddress.d.ts'
import type { Proxy } from '../../../../../java/net/Proxy.d.ts'
import type { ProxySelector } from '../../../../../java/net/ProxySelector.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { URI } from '../../../../../java/net/URI.d.ts'
export class SingleProxySelector extends ProxySelector {
    static getDefault(): ProxySelector;
    static of(paramarg0: InetSocketAddress): ProxySelector;
    static setDefault(paramarg0: ProxySelector): void;
    constructor(arg0: Proxy, arg1: string, arg2: string)
    // private defaultAuthenticator: Authenticator;
    // private defaultProxySelector: ProxySelector;
    // private password: string;
    // private proxy: Proxy;
    // private username: string;
    connectFailed(arg0: URI, arg1: SocketAddress, arg2: IOException): void;
    reset(arg0: boolean): SingleProxySelector;
    select(arg0: URI): Proxy[];
    set(arg0: boolean): SingleProxySelector;
}