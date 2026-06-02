import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPredicateArgument$Result } from '../../../../../net/minecraft/commands/arguments/blocks/BlockPredicateArgument$Result.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { BlockInWorld } from '../../../../../net/minecraft/world/level/block/state/pattern/BlockInWorld.d.ts'
export class BlockPredicateArgument$TagPredicate extends Object implements BlockPredicateArgument$Result {
    private constructor(tag: Holder<T>[], vagueProperties: { [key: string]: string }, nbt: CompoundTag)
    // private nbt: CompoundTag;
    // private tag: Holder<T>[];
    // private vagueProperties: { [key: string]: string };
    requiresNbt(): boolean;
    test(blockInWorld: BlockInWorld): boolean;
}