import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityAnchorArgument$Anchor } from '../../../../../net/minecraft/commands/arguments/EntityAnchorArgument$Anchor.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ClientboundPlayerLookAtPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ClientboundPlayerLookAtPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    constructor(fromAnchor: EntityAnchorArgument$Anchor, x: number, y: number, z: number)
    constructor(fromAnchor: EntityAnchorArgument$Anchor, entity: Entity, toAnchor: EntityAnchorArgument$Anchor)
    // private atEntity: boolean;
    // private entity: number;
    readonly fromAnchor: EntityAnchorArgument$Anchor;
    // private toAnchor: EntityAnchorArgument$Anchor;
    // private x: number;
    // private y: number;
    // private z: number;
    getFromAnchor(): EntityAnchorArgument$Anchor;
    getPosition(level: Level): Vec3;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundPlayerLookAtPacket>;
    // private write(output: FriendlyByteBuf): void;
}