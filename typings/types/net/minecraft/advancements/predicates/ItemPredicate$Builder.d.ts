import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentMatchers } from '../../../../net/minecraft/advancements/predicates/DataComponentMatchers.d.ts'
import type { ItemPredicate } from '../../../../net/minecraft/advancements/predicates/ItemPredicate.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { HolderGetter } from '../../../../net/minecraft/core/HolderGetter.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemLike } from '../../../../net/minecraft/world/level/ItemLike.d.ts'
export class ItemPredicate$Builder extends Object {
    static item(): ItemPredicate$Builder;
    constructor()
    // private components: DataComponentMatchers;
    // private count: MinMaxBounds$Ints;
    // private items: Optional<Holder<Item>[]>;
    build(): ItemPredicate;
    of(lookup: HolderGetter<Item>, ...items: ItemLike[]): ItemPredicate$Builder;
    of(lookup: HolderGetter<Item>, tag: TagKey<Item>): ItemPredicate$Builder;
    withComponents(components: DataComponentMatchers): ItemPredicate$Builder;
    withCount(count: MinMaxBounds$Ints): ItemPredicate$Builder;
}