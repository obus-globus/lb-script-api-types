import type { SocketAddress } from '../../../../io/ktor/network/sockets/SocketAddress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Source } from '../../../../kotlinx/io/Source.d.ts'
export class Datagram extends Object {
    constructor(packet: Source, address: SocketAddress)
    readonly address: SocketAddress;
    readonly packet: Source;
}