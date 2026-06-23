import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPredicateArgument$Result } from '../../../../../net/minecraft/commands/arguments/blocks/BlockPredicateArgument$Result.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockInWorld } from '../../../../../net/minecraft/world/level/block/state/pattern/BlockInWorld.d.ts'
import type { Property } from '../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class BlockPredicateArgument$BlockPredicate extends Object implements BlockPredicateArgument$Result {
    constructor(state: BlockState, properties: Property<any>[], nbt: CompoundTag)
    // private nbt: CompoundTag;
    // private properties: Property<any>[];
    // private state: BlockState;
    requiresNbt(): boolean;
    test(blockInWorld: BlockInWorld): boolean;
}