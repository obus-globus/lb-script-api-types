import type { IOException } from '../../java/io/IOException.d.ts'
import type { InetSocketAddress } from '../../java/net/InetSocketAddress.d.ts'
import type { Proxy } from '../../java/net/Proxy.d.ts'
import type { SocketAddress } from '../../java/net/SocketAddress.d.ts'
import type { URI } from '../../java/net/URI.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export abstract class ProxySelector extends Object {
    static getDefault(): ProxySelector;
    static of(paramarg0: InetSocketAddress): ProxySelector;
    static setDefault(paramarg0: ProxySelector): void;
    constructor()
    connectFailed(arg0: URI, arg1: SocketAddress, arg2: IOException): void;
    select(arg0: URI): Proxy[];
}