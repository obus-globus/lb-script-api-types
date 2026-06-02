import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CollectionContentsPredicate } from '../../../../net/minecraft/advancements/criterion/CollectionContentsPredicate.d.ts'
export class CollectionContentsPredicate$Zero<T extends Object | number | string | boolean, P extends Predicate<T>> extends Object implements CollectionContentsPredicate<T, P> {
    static codec(paramelementCodec: Codec<Object>): Codec<Object>;
    static of(parampredicates: Object | null): CollectionContentsPredicate<Object, Object>;
    static of(parampredicates: (Object | null)[]): CollectionContentsPredicate<Object, Object>;
    constructor()
    test(values: T[]): boolean;
    unpack(): P[];
}