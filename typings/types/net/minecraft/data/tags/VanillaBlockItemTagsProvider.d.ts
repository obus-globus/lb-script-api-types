import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { BlockItemTagsProvider } from '../../../../net/minecraft/data/tags/BlockItemTagsProvider.d.ts'
import type { BlockItemTagsProvider$CombinedAppender } from '../../../../net/minecraft/data/tags/BlockItemTagsProvider$CombinedAppender.d.ts'
import type { TagAppender } from '../../../../net/minecraft/data/tags/TagAppender.d.ts'
import type { BlockItemTagId } from '../../../../net/minecraft/tags/BlockItemTagId.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
export class VanillaBlockItemTagsProvider extends BlockItemTagsProvider {
    static wrapForBlocks(paramappender: TagAppender<Block>): BlockItemTagsProvider$CombinedAppender;
    static wrapForItems(paramappender: TagAppender<Item>): BlockItemTagsProvider$CombinedAppender;
    constructor(tagSupplier: (param0: BlockItemTagId) => BlockItemTagsProvider$CombinedAppender)
    run(): void;
}