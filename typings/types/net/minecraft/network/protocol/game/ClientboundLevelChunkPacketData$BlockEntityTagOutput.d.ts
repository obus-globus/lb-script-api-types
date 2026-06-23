import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { BlockEntityType } from '../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
export interface ClientboundLevelChunkPacketData$BlockEntityTagOutput extends Object{
    accept(pos: BlockPos, type: BlockEntityType<any>, tag: CompoundTag): void;
}