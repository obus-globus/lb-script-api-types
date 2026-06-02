import type { Identifier } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { IdentifierIndex } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/IdentifierIndex.d.ts'
import type { PrefixQueryable } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/PrefixQueryable.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PrefixIdentifierIndex<S extends Identifier[], I extends PatriciaTrie<S>> extends IdentifierIndex<S, I> implements PrefixQueryable<S, Identifier> {
    static withOnlyExact(paramarg0: () => Object | null): IdentifierIndex<Object, Object>;
    static withOnlyExact(): IdentifierIndex<Object, Object>;
    static withOnlyExactOrdered(): IdentifierIndex<Object, Object>;
    static withPermuterm(paramarg0: () => Object | null): PrefixIdentifierIndex<Object, Object>;
    static withPermuterm(): PrefixIdentifierIndex<Object, Object>;
    static withPrefix(paramarg0: () => Object | null): PrefixIdentifierIndex<Object, Object>;
    static withPrefix(): PrefixIdentifierIndex<Object, Object>;
    static withPrefixSuffix(paramarg0: () => Object | null): PrefixIdentifierIndex<Object, Object>;
    static withPrefixSuffix(): PrefixIdentifierIndex<Object, Object>;
    constructor(arg0: I, arg1: () => S)
    prefixMap(arg0: string): { [key: string]: S };
    prefixQuery(arg0: string): Stream<S>;
    prefixQueryFlat(arg0: string): Stream<E>;
}