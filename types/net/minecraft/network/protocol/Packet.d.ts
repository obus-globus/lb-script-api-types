import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PacketListener } from '../../../../net/minecraft/network/PacketListener.d.ts'
import type { PacketType } from '../../../../net/minecraft/network/protocol/PacketType.d.ts'
export interface Packet<T extends PacketListener> extends Object{
    handle(listener: T): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<Packet<T>>;
}