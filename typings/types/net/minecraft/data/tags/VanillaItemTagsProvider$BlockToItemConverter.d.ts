import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TagAppender } from '../../../../net/minecraft/data/tags/TagAppender.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagBuilder } from '../../../../net/minecraft/tags/TagBuilder.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
export class VanillaItemTagsProvider$BlockToItemConverter extends Object implements TagAppender<Block, Block> {
    static forBuilder(parambuilder: TagBuilder): TagAppender<ResourceKey<Object>, Object>;
    constructor(itemAppender: TagAppender<Item, Item>)
}