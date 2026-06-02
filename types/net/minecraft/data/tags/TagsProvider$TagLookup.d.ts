import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TagBuilder } from '../../../../net/minecraft/tags/TagBuilder.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
export interface TagsProvider$TagLookup<T extends Object | number | string | boolean> extends Function<TagKey<T>, Optional<TagBuilder>>, Object{
    andThen(arg0: (param0: R) => V): (param0: T) => V;
    compose(arg0: (param0: V) => T): (param0: V) => R;
    contains(key: TagKey<T>): boolean;
}