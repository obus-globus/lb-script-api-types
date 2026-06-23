import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CollectionCountsPredicate } from '../../../../net/minecraft/advancements/criterion/CollectionCountsPredicate.d.ts'
import type { CollectionCountsPredicate$Entry } from '../../../../net/minecraft/advancements/criterion/CollectionCountsPredicate$Entry.d.ts'
export class CollectionCountsPredicate$Zero<T extends unknown, P extends Predicate<T>> extends Object implements CollectionCountsPredicate<T, P> {
    static codec(paramelementCodec: Codec<Object>): Codec<CollectionCountsPredicate<Object, any>>;
    static of(parampredicates: CollectionCountsPredicate$Entry<Object, any>[]): CollectionCountsPredicate<Object, any>;
    static of(parampredicates: Object | null): CollectionCountsPredicate<Object, any>;
    constructor()
    test(values: T[]): boolean;
    unpack(): CollectionCountsPredicate$Entry<T, P>[];
}