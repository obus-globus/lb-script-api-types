import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { CompoundTag } from '../../../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class StructureTemplate$StructureBlockInfo extends Record {
    constructor(pos: BlockPos, state: BlockState, nbt: CompoundTag)
    // private nbt: CompoundTag;
    // private pos: BlockPos;
    // private state: BlockState;
    equals(o: Object | null): boolean;
    hashCode(): number;
    nbt(): CompoundTag;
    pos(): BlockPos;
    state(): BlockState;
    toString(): string;
}