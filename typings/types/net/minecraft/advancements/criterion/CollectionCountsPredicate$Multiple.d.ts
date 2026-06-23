import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CollectionCountsPredicate } from '../../../../net/minecraft/advancements/criterion/CollectionCountsPredicate.d.ts'
import type { CollectionCountsPredicate$Entry } from '../../../../net/minecraft/advancements/criterion/CollectionCountsPredicate$Entry.d.ts'
export class CollectionCountsPredicate$Multiple<T extends Object | number | string | boolean, P extends Predicate<T>> extends Record implements CollectionCountsPredicate<T, P> {
    static codec(paramelementCodec: Codec<Object>): Codec<CollectionCountsPredicate<Object, any>>;
    static of(parampredicates: CollectionCountsPredicate$Entry<Object, any>[]): CollectionCountsPredicate<Object, any>;
    static of(parampredicates: Object | null): CollectionCountsPredicate<Object, any>;
    constructor(entries: CollectionCountsPredicate$Entry<T, P>[])
    // private entries: CollectionCountsPredicate$Entry<T, P>[];
    entries(): CollectionCountsPredicate$Entry<T, P>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    test(values: T[]): boolean;
    toString(): string;
    unpack(): CollectionCountsPredicate$Entry<T, P>[];
}