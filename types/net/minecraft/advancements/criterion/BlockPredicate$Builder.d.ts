import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPredicate } from '../../../../net/minecraft/advancements/criterion/BlockPredicate.d.ts'
import type { DataComponentMatchers } from '../../../../net/minecraft/advancements/criterion/DataComponentMatchers.d.ts'
import type { NbtPredicate } from '../../../../net/minecraft/advancements/criterion/NbtPredicate.d.ts'
import type { StatePropertiesPredicate } from '../../../../net/minecraft/advancements/criterion/StatePropertiesPredicate.d.ts'
import type { StatePropertiesPredicate$Builder } from '../../../../net/minecraft/advancements/criterion/StatePropertiesPredicate$Builder.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
export class BlockPredicate$Builder extends Object {
    static block(): BlockPredicate$Builder;
    private constructor()
    // private blocks: Optional<Holder<T>[]>;
    // private components: DataComponentMatchers;
    // private nbt: Optional<NbtPredicate>;
    // private properties: Optional<StatePropertiesPredicate>;
    build(): BlockPredicate;
    components(components: DataComponentMatchers): BlockPredicate$Builder;
    hasNbt(nbt: CompoundTag): BlockPredicate$Builder;
    of(lookup: HolderGetter<Block>, blocks: Block[]): BlockPredicate$Builder;
    of(lookup: HolderGetter<Block>, blocks: E[]): BlockPredicate$Builder;
    of(lookup: HolderGetter<Block>, tag: TagKey<Block>): BlockPredicate$Builder;
    setProperties(properties: StatePropertiesPredicate$Builder): BlockPredicate$Builder;
}