import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TagBuilder } from '../../../../net/minecraft/tags/TagBuilder.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
export interface TagsProvider$TagLookup<T extends unknown> extends Function<TagKey<T>, Optional<TagBuilder>>, Object {
    andThen<V extends unknown>(arg0: (param0: Optional<TagBuilder>) => V): (param0: TagKey<T>) => V;
    compose<V extends unknown>(arg0: (param0: V) => TagKey<T>): (param0: V) => Optional<TagBuilder>;
    contains(key: TagKey<T>): boolean;
}