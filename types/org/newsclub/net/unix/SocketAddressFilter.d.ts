import type { SocketAddress } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SocketAddressFilter extends Object{
    apply(arg0: SocketAddress): SocketAddress;
}