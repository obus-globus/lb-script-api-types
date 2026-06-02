import type { Stream } from '../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../net/minecraft/tags/TagKey.d.ts'
export interface TypedInstance<T extends Object | number | string | boolean> extends Object{
    is(rawType: T): boolean;
    is(type: Holder<T>): boolean;
    is(set: Holder<T>[]): boolean;
    is(type: ResourceKey<T>): boolean;
    is(tag: TagKey<T>): boolean;
    tags(): Stream<TagKey<T>>;
    typeHolder(): Holder<T>;
}