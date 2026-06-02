import type { Proxy } from '../../../../../java/net/Proxy.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ProxyType } from '../../../../../net/lenni0451/commons/httpclient/proxy/ProxyType.d.ts'
import type { SingleProxyAuthenticator } from '../../../../../net/lenni0451/commons/httpclient/proxy/SingleProxyAuthenticator.d.ts'
import type { SingleProxySelector } from '../../../../../net/lenni0451/commons/httpclient/proxy/SingleProxySelector.d.ts'
export class ProxyHandler extends Object {
    constructor()
    constructor(arg0: ProxyType, arg1: SocketAddress)
    constructor(arg0: ProxyType, arg1: SocketAddress, arg2: string, arg3: string)
    constructor(arg0: ProxyType, arg1: string, arg2: number)
    constructor(arg0: ProxyType, arg1: string, arg2: number, arg3: string, arg4: string)
    readonly address: SocketAddress;
    readonly password: string;
    readonly proxyType: ProxyType;
    readonly username: string;
    getAddress(): SocketAddress;
    getPassword(): string;
    getProxyAuthenticator(): SingleProxyAuthenticator;
    getProxySelector(): SingleProxySelector;
    getProxyType(): ProxyType;
    getUsername(): string;
    isAuthenticationSet(): boolean;
    isProxySet(): boolean;
    setAddress(arg0: SocketAddress): ProxyHandler;
    setPassword(arg0: string): ProxyHandler;
    setProxy(arg0: ProxyType, arg1: SocketAddress): ProxyHandler;
    setProxy(arg0: ProxyType, arg1: string, arg2: number): ProxyHandler;
    setProxyType(arg0: ProxyType): ProxyHandler;
    setUsername(arg0: string): ProxyHandler;
    toJavaProxy(): Proxy;
    unsetProxy(): ProxyHandler;
}