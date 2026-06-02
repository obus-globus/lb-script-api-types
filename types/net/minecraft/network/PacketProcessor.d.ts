import type { AutoCloseable } from '../../../java/lang/AutoCloseable.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PacketListener } from '../../../net/minecraft/network/PacketListener.d.ts'
import type { PacketProcessor$ListenerAndPacket } from '../../../net/minecraft/network/PacketProcessor$ListenerAndPacket.d.ts'
import type { Packet } from '../../../net/minecraft/network/protocol/Packet.d.ts'
export class PacketProcessor extends Object implements AutoCloseable {
    constructor(runningThread: Thread)
    // private closed: boolean;
    // private packetsToBeHandled: PacketProcessor$ListenerAndPacket<Object>[];
    // private runningThread: Thread;
    close(): void;
    isSameThread(): boolean;
    processQueuedPackets(): void;
    scheduleIfPossible<T extends PacketListener>(listener: T, packet: Packet<T>): void;
}