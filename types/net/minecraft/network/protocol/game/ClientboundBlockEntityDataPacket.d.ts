import type { BiFunction } from '../../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RegistryAccess } from '../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { StreamDecoder } from '../../../../../net/minecraft/network/codec/StreamDecoder.d.ts'
import type { StreamMemberEncoder } from '../../../../../net/minecraft/network/codec/StreamMemberEncoder.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientGamePacketListener } from '../../../../../net/minecraft/network/protocol/game/ClientGamePacketListener.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
export class ClientboundBlockEntityDataPacket extends Object implements Packet<ClientGamePacketListener> {
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundBlockEntityDataPacket>;
    static codec(paramwriter: (param0: Object | null, param1: Object | null) => void, paramreader: (param0: Object | null) => Object | null): StreamCodec<Object, Object>;
    static create(paramblockEntity: BlockEntity): ClientboundBlockEntityDataPacket;
    static create(paramblockEntity: BlockEntity, paramupdateTagSaver: (param0: BlockEntity, param1: RegistryAccess) => CompoundTag): ClientboundBlockEntityDataPacket;
    private constructor(pos: BlockPos, type: BlockEntityType<Object>, tag: CompoundTag)
    readonly pos: BlockPos;
    readonly tag: CompoundTag;
    readonly type: BlockEntityType<Object>;
    getPos(): BlockPos;
    getTag(): CompoundTag;
    getType(): BlockEntityType<Object>;
    handle(listener: ClientGamePacketListener): void;
    isSkippable(): boolean;
    isTerminal(): boolean;
    type(): PacketType<ClientboundBlockEntityDataPacket>;
}