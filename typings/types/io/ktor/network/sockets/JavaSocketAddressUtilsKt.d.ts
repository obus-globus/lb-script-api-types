import type { SocketAddress } from '../../../../io/ktor/network/sockets/SocketAddress.d.ts'
import type { SocketAddress as SocketAddress_2 } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class JavaSocketAddressUtilsKt extends Object {
    static toJavaAddress(self: SocketAddress): SocketAddress_2;
    static toSocketAddress(self: SocketAddress_2): SocketAddress;
}