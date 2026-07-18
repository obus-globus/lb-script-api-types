import type { SocketAddress } from '../../../../io/ktor/network/sockets/SocketAddress.d.ts'
import type { UnixSocketAddress$Companion } from '../../../../io/ktor/network/sockets/UnixSocketAddress$Companion.d.ts'
import type { SocketAddress as SocketAddress_2 } from '../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnixSocketAddress extends SocketAddress {
    static Companion: UnixSocketAddress$Companion;
    constructor(address: SocketAddress_2)
    constructor(path: string)
    // private address: SocketAddress_2;
    /*not mapped: */ getAddress$ktor_network(): SocketAddress_2;
    readonly path: string;
    component1(): string;
    copy(path: string): UnixSocketAddress;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}