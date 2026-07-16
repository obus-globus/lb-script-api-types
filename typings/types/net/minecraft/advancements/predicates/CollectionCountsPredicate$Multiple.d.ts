import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CollectionCountsPredicate } from '../../../../net/minecraft/advancements/predicates/CollectionCountsPredicate.d.ts'
import type { CollectionCountsPredicate$Entry } from '../../../../net/minecraft/advancements/predicates/CollectionCountsPredicate$Entry.d.ts'
export class CollectionCountsPredicate$Multiple<T extends unknown, P extends Predicate<T>> extends Record implements CollectionCountsPredicate<T, P> {
    static codec<T extends unknown, P extends Predicate<T>>(paramelementCodec: Codec<P>): Codec<CollectionCountsPredicate<T, P>>;
    static of<T extends unknown, P extends Predicate<T>>(parampredicates: CollectionCountsPredicate$Entry<T, P>[]): CollectionCountsPredicate<T, P>;
    static of<T extends unknown, P extends Predicate<T>>(...parampredicates: CollectionCountsPredicate$Entry<T, P>[]): CollectionCountsPredicate<T, P>;
    constructor(entries: CollectionCountsPredicate$Entry<T, P>[])
    // private entries: CollectionCountsPredicate$Entry<T, P>[];
    entries(): CollectionCountsPredicate$Entry<T, P>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    test(values: T[]): boolean;
    toString(): string;
    unpack(): CollectionCountsPredicate$Entry<T, P>[];
}