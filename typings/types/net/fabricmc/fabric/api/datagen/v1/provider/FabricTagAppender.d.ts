import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TagAppender } from '../../../../../../../net/minecraft/data/tags/TagAppender.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagBuilder } from '../../../../../../../net/minecraft/tags/TagBuilder.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
export interface FabricTagAppender<T extends unknown> extends Object{
    forceAddTag(arg0: TagKey<T>): TagAppender<T>;
    getBuilder(): TagBuilder;
    remove(arg0: ResourceKey<T>[]): TagAppender<T>;
    remove(arg0: ResourceKey<T>): TagAppender<T>;
    removeAll(arg0: Stream<ResourceKey<T>>): TagAppender<T>;
    removeAll(arg0: ResourceKey<T>[]): TagAppender<T>;
    removeTag(arg0: TagKey<T>): TagAppender<T>;
    setReplace(arg0: boolean): TagAppender<T>;
}