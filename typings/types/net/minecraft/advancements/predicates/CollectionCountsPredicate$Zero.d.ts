import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CollectionCountsPredicate } from '../../../../net/minecraft/advancements/predicates/CollectionCountsPredicate.d.ts'
import type { CollectionCountsPredicate$Entry } from '../../../../net/minecraft/advancements/predicates/CollectionCountsPredicate$Entry.d.ts'
export class CollectionCountsPredicate$Zero<T extends unknown, P extends Predicate<T>> extends Object implements CollectionCountsPredicate<T, P> {
    static codec<T extends unknown, P extends Predicate<T>>(paramelementCodec: Codec<P>): Codec<CollectionCountsPredicate<T, P>>;
    static of<T extends unknown, P extends Predicate<T>>(parampredicates: CollectionCountsPredicate$Entry<T, P>[]): CollectionCountsPredicate<T, P>;
    static of<T extends unknown, P extends Predicate<T>>(...parampredicates: CollectionCountsPredicate$Entry<T, P>[]): CollectionCountsPredicate<T, P>;
    constructor()
    test(values: T[]): boolean;
    unpack(): CollectionCountsPredicate$Entry<T, P>[];
}