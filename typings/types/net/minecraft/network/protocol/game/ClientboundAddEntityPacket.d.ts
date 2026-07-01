import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { ServerEntity } from '../../../../../net/minecraft/server/level/ServerEntity.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ClientboundAddEntityPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundAddEntityPacket>;
    static codec(paramwriter: (param0: Object | null, param1: ByteBuf | null) => void, paramreader: (param0: ByteBuf | null) => Object | null): StreamCodec<ByteBuf, Object>;
    constructor(id: number, uuid: UUID, x: number, y: number, z: number, xRot: number, yRot: number, type: EntityType<any>, data: number, movement: Vec3, yHeadRot: number)
    constructor(entity: Entity, data: number, pos: BlockPos)
    constructor(entity: Entity, serverEntity: ServerEntity)
    constructor(entity: Entity, serverEntity: ServerEntity, data: number)
    readonly data: number;
    readonly id: number;
    readonly movement: Vec3;
    // private uuid: UUID;
    readonly x: number;
    // private xRot: number;
    readonly y: number;
    // private yHeadRot: number;
    // private yRot: number;
    readonly z: number;
    getData(): number;
    getId(): number;
    getMovement(): Vec3;
    getType(): EntityType<any>;
    getUUID(): UUID;
    getX(): number;
    getXRot(): number;
    getY(): number;
    getYHeadRot(): number;
    getYRot(): number;
    getZ(): number;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundAddEntityPacket>;
    // private write(output: RegistryFriendlyByteBuf): void;
}