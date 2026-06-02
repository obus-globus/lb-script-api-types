import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class StructureTemplate$StructureEntityInfo extends Object {
    constructor(pos: Vec3, blockPos: BlockPos, nbt: CompoundTag)
    blockPos: BlockPos;
    nbt: CompoundTag;
    pos: Vec3;
}