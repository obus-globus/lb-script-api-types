import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFServerSocket } from '../../../../org/newsclub/net/unix/AFServerSocket.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
export interface AFServerSocketConnector<A extends AFSocketAddress, T extends AFSocketAddress> extends Object{
    bind(arg0: A): AFServerSocket<T>;
}