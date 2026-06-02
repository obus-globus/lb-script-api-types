import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PacketListener } from '../../../../net/minecraft/network/PacketListener.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../net/minecraft/network/protocol/PacketType.d.ts'
export abstract class BundlePacket<T extends PacketListener> extends Object implements Packet<T> {
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    constructor(packets: Packet<T>[])
    // private packets: Packet<T>[];
    isSkippable(): boolean;
    isTerminal(): boolean;
    subPackets(): Packet<T>[];
    type(): PacketType<BundlePacket<T>>;
}