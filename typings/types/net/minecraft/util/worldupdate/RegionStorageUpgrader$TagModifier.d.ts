import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { ChunkPos } from '../../../../net/minecraft/world/level/ChunkPos.d.ts'
export interface RegionStorageUpgrader$TagModifier extends Object{
    modifyTagAfterFix(pos: ChunkPos, upgradedTag: CompoundTag): boolean;
}