import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TagAppender } from '../../../../net/minecraft/data/tags/TagAppender.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
export abstract class BlockItemTagsProvider extends Object {
    constructor()
    run(): void;
    tag(blockTag: TagKey<Block>, itemTag: TagKey<Item>): TagAppender<Block, Block>;
}