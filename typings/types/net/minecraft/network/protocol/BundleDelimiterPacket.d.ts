import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PacketListener } from '../../../../net/minecraft/network/PacketListener.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../net/minecraft/network/protocol/PacketType.d.ts'
export abstract class BundleDelimiterPacket<T extends PacketListener> extends Object implements Packet<T> {
    constructor()
    handle(listener: T): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<BundleDelimiterPacket<T>>;
}