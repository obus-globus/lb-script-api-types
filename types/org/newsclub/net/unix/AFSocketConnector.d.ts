import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSocket } from '../../../../org/newsclub/net/unix/AFSocket.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
export interface AFSocketConnector<A extends AFSocketAddress, T extends AFSocketAddress> extends Object{
    connect(arg0: A): AFSocket<T>;
}