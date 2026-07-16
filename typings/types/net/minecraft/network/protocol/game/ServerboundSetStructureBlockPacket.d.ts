import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../../net/minecraft/core/Vec3i.d.ts'
import type { FriendlyByteBuf } from '../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ServerGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerGamePacketListener.d.ts'
import type { Mirror } from '../../../../../net/minecraft/world/level/block/Mirror.d.ts'
import type { Rotation } from '../../../../../net/minecraft/world/level/block/Rotation.d.ts'
import type { StructureBlockEntity$UpdateType } from '../../../../../net/minecraft/world/level/block/entity/StructureBlockEntity$UpdateType.d.ts'
import type { StructureMode } from '../../../../../net/minecraft/world/level/block/state/properties/StructureMode.d.ts'
export class ServerboundSetStructureBlockPacket extends Object implements Packet<ServerGamePacketListener> {
    static STREAM_CODEC: StreamCodec<FriendlyByteBuf, ServerboundSetStructureBlockPacket>;
    static codec<B extends ByteBuf, T extends Packet<any>>(paramwriter: (param0: T, param1: B) => void, paramreader: (param0: B) => T): StreamCodec<B, T>;
    constructor(pos: BlockPos, updateType: StructureBlockEntity$UpdateType, mode: StructureMode, name: string, offset: BlockPos, size: Vec3i, mirror: Mirror, rotation: Rotation, data: string, ignoreEntities: boolean, strict: boolean, showAir: boolean, showBoundingBox: boolean, integrity: number, seed: number)
    readonly data: string;
    readonly ignoreEntities: boolean;
    readonly integrity: number;
    readonly mirror: Mirror;
    readonly mode: StructureMode;
    readonly name: string;
    readonly offset: BlockPos;
    readonly pos: BlockPos;
    readonly rotation: Rotation;
    readonly seed: number;
    readonly showAir: boolean;
    readonly showBoundingBox: boolean;
    readonly size: Vec3i;
    readonly strict: boolean;
    readonly updateType: StructureBlockEntity$UpdateType;
    getData(): string;
    getIntegrity(): number;
    getMirror(): Mirror;
    getMode(): StructureMode;
    getName(): string;
    getOffset(): BlockPos;
    getPos(): BlockPos;
    getRotation(): Rotation;
    getSeed(): number;
    getSize(): Vec3i;
    getUpdateType(): StructureBlockEntity$UpdateType;
    handle(listener: ServerGamePacketListener): void;
    isIgnoreEntities(): boolean;
    isShowAir(): boolean;
    isShowBoundingBox(): boolean;
    isSkippable(): boolean;
    isStrict(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ServerboundSetStructureBlockPacket>;
    // private write(output: FriendlyByteBuf): void;
}