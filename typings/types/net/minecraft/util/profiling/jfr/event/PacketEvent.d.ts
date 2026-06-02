import type { SocketAddress } from '../../../../../../java/net/SocketAddress.d.ts'
import type { Event } from '../../../../../../jdk/jfr/Event.d.ts'
export abstract class PacketEvent extends Event {
    constructor(protocolId: string, packetDirection: string, packetId: string, remoteAddress: SocketAddress, bytes: number)
    bytes: number;
    packetDirection: string;
    packetId: string;
    protocolId: string;
    remoteAddress: string;
}