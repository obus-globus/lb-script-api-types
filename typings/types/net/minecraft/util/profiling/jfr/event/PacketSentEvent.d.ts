import type { SocketAddress } from '../../../../../../java/net/SocketAddress.d.ts'
import type { EventType } from '../../../../../../jdk/jfr/EventType.d.ts'
import type { PacketEvent } from '../../../../../../net/minecraft/util/profiling/jfr/event/PacketEvent.d.ts'
export class PacketSentEvent extends PacketEvent {
    static NAME: string;
    static TYPE: EventType;
    constructor(protocolId: string, packetDirection: string, packetId: string, remoteAddress: SocketAddress, writtenBytes: number)
}