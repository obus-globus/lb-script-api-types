import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TagAppender } from '../../../../../../../net/minecraft/data/tags/TagAppender.d.ts'
import type { TagKey } from '../../../../../../../net/minecraft/tags/TagKey.d.ts'
export interface FabricTagAppender<E extends unknown, T extends unknown> extends Object{
    forceAddTag(arg0: TagKey<T>): TagAppender<E, T>;
    remove(arg0: E): TagAppender<E, T>;
    remove(arg0: E[]): TagAppender<E, T>;
    removeAll(arg0: Stream<E>): TagAppender<E, T>;
    removeAll(arg0: E[]): TagAppender<E, T>;
    removeTag(arg0: TagKey<T>): TagAppender<E, T>;
    setReplace(arg0: boolean): TagAppender<E, T>;
}