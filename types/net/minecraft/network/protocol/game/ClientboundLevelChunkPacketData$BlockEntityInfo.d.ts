import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { BlockEntityType } from '../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
export class ClientboundLevelChunkPacketData$BlockEntityInfo extends Object {
    static LIST_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ClientboundLevelChunkPacketData$BlockEntityInfo>;
    private constructor(packedXZ: number, y: number, type: BlockEntityType<Object>, tag: CompoundTag)
    private constructor(input: RegistryFriendlyByteBuf)
    // private packedXZ: number;
    // private tag: CompoundTag;
    // private type: BlockEntityType<Object>;
    // private y: number;
    // private write(output: RegistryFriendlyByteBuf): void;
}