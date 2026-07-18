import type { SocketAddress } from '../../../../io/ktor/network/sockets/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AConnectedSocket extends Object{
    readonly remoteAddress: SocketAddress;
}