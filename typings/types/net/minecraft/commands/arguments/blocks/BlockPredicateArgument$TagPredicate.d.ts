import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPredicateArgument$Result } from '../../../../../net/minecraft/commands/arguments/blocks/BlockPredicateArgument$Result.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockInWorld } from '../../../../../net/minecraft/world/level/block/state/pattern/BlockInWorld.d.ts'
export class BlockPredicateArgument$TagPredicate extends Object implements BlockPredicateArgument$Result {
    private constructor(tag: Holder<Block>[], vagueProperties: JavaMap<string, string>, nbt: CompoundTag)
    // private nbt: CompoundTag;
    // private tag: Holder<Block>[];
    // private vagueProperties: JavaMap<string, string>;
    requiresNbt(): boolean;
    test(blockInWorld: BlockInWorld): boolean;
}