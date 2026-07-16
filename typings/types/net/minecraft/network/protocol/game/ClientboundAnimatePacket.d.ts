import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
export class ClientboundAnimatePacket extends Object implements Packet<ClientGamePacketListener> {
    static CRITICAL_HIT: number;
    static MAGIC_CRITICAL_HIT: number;
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundAnimatePacket>;
    static SWING_MAIN_HAND: number;
    static SWING_OFF_HAND: number;
    static WAKE_UP: number;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(entity: Entity, action: number)
    readonly action: number;
    readonly id: number;
    getAction(): number;
    getId(): number;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundAnimatePacket>;
    // private write(output: FriendlyByteBuf): void;
}