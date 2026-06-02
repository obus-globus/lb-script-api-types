import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PacketListener } from '../../../net/minecraft/network/PacketListener.d.ts'
import type { Packet } from '../../../net/minecraft/network/protocol/Packet.d.ts'
export class PacketProcessor$ListenerAndPacket<T extends PacketListener> extends Record {
    private constructor(listener: T, packet: Packet<T>)
    // private listener: T;
    // private packet: Packet<T>;
    equals(o: Object | null): boolean;
    handle(): void;
    hashCode(): number;
    listener(): T;
    packet(): Packet<T>;
    toString(): string;
}