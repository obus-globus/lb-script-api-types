import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CollectionContentsPredicate } from '../../../../net/minecraft/advancements/criterion/CollectionContentsPredicate.d.ts'
export class CollectionContentsPredicate$Single<T extends Object | number | string | boolean, P extends Predicate<T>> extends Record implements CollectionContentsPredicate<T, P> {
    static codec(paramelementCodec: Codec<Object>): Codec<CollectionContentsPredicate<Object, Object>>;
    static of(parampredicates: Object | null): CollectionContentsPredicate<Object, Object>;
    static of(parampredicates: (Object | null)[]): CollectionContentsPredicate<Object, Object>;
    constructor(test: P)
    // private test: P;
    equals(o: Object | null): boolean;
    hashCode(): number;
    test(): P;
    test(values: T[]): boolean;
    toString(): string;
    unpack(): P[];
}