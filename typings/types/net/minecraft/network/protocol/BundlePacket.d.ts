import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PacketListener } from '../../../../net/minecraft/network/PacketListener.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../net/minecraft/network/protocol/PacketType.d.ts'
export abstract class BundlePacket<T extends PacketListener> extends Object implements Packet<T> {
    constructor(packets: Packet<T>[])
    // private packets: Packet<T>[];
    isSkippable(): boolean;
    isTerminal(): boolean;
    subPackets(): Packet<T>[];
    type(): PacketType<BundlePacket<T>>;
}