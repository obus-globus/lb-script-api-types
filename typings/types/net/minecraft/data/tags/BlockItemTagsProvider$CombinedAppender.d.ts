import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockItemId } from '../../../../net/minecraft/references/BlockItemId.d.ts'
import type { BlockItemTagId } from '../../../../net/minecraft/tags/BlockItemTagId.d.ts'
export interface BlockItemTagsProvider$CombinedAppender extends Object{
    add(...ids: BlockItemId[]): BlockItemTagsProvider$CombinedAppender;
    addAll(ids: Stream<BlockItemId>): BlockItemTagsProvider$CombinedAppender;
    addAll(ids: BlockItemId[]): BlockItemTagsProvider$CombinedAppender;
    addTag(id: BlockItemTagId): BlockItemTagsProvider$CombinedAppender;
}