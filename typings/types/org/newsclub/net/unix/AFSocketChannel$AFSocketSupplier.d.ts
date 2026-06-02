import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AFSocket } from '../../../../org/newsclub/net/unix/AFSocket.d.ts'
import type { AFSocketAddress } from '../../../../org/newsclub/net/unix/AFSocketAddress.d.ts'
export interface AFSocketChannel$AFSocketSupplier<A extends AFSocketAddress> extends Object{
    newInstance(): AFSocket<A>;
}