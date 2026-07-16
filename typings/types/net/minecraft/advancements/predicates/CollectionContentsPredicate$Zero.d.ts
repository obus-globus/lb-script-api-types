import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CollectionContentsPredicate } from '../../../../net/minecraft/advancements/predicates/CollectionContentsPredicate.d.ts'
export class CollectionContentsPredicate$Zero<T extends unknown, P extends Predicate<T>> extends Object implements CollectionContentsPredicate<T, P> {
    static codec<T extends unknown, P extends Predicate<T>>(paramelementCodec: Codec<P>): Codec<CollectionContentsPredicate<T, P>>;
    static of<T extends unknown, P extends Predicate<T>>(...parampredicates: P[]): CollectionContentsPredicate<T, P>;
    static of<T extends unknown, P extends Predicate<T>>(parampredicates: P[]): CollectionContentsPredicate<T, P>;
    constructor()
    test(values: T[]): boolean;
    unpack(): P[];
}