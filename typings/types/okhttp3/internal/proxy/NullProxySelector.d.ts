import type { IOException } from '../../../java/io/IOException.d.ts'
import type { InetSocketAddress } from '../../../java/net/InetSocketAddress.d.ts'
import type { Proxy } from '../../../java/net/Proxy.d.ts'
import type { ProxySelector } from '../../../java/net/ProxySelector.d.ts'
import type { SocketAddress } from '../../../java/net/SocketAddress.d.ts'
import type { URI } from '../../../java/net/URI.d.ts'
export class NullProxySelector extends ProxySelector {
    static INSTANCE: NullProxySelector;
    static getDefault(): ProxySelector;
    static of(paramarg0: InetSocketAddress): ProxySelector;
    static setDefault(paramarg0: ProxySelector): void;
    connectFailed(uri: URI | null, sa: SocketAddress | null, ioe: IOException | null): void;
    select(uri: URI | null): Proxy[];
}