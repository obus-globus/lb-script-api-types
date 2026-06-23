import type { Identifier } from '../../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { IdentifierIndex } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/IdentifierIndex.d.ts'
import type { PrefixQueryable } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/PrefixQueryable.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PrefixIdentifierIndex<S extends Identifier[], I extends { [key: string]: any }> extends IdentifierIndex<S, I> implements PrefixQueryable<S, Identifier> {
    static withOnlyExact(paramarg0: () => Object | null): IdentifierIndex<Object, { [key: string]: Object | null }>;
    static withOnlyExact(): IdentifierIndex<Identifier[], { [key: string]: Identifier[] }>;
    static withOnlyExactOrdered(): IdentifierIndex<Identifier[], { [key: string]: Identifier[] }>;
    static withPermuterm(paramarg0: () => Object | null): PrefixIdentifierIndex<Object, Map<Object | null, Identifier>>;
    static withPermuterm(): PrefixIdentifierIndex<Identifier[], Map<Identifier[], Identifier>>;
    static withPrefix(paramarg0: () => Object | null): PrefixIdentifierIndex<Object, Map<Object | null, Identifier>>;
    static withPrefix(): PrefixIdentifierIndex<Identifier[], Map<Identifier[], Identifier>>;
    static withPrefixSuffix(paramarg0: () => Object | null): PrefixIdentifierIndex<Object, Map<Object | null, Identifier>>;
    static withPrefixSuffix(): PrefixIdentifierIndex<Identifier[], Map<Identifier[], Identifier>>;
    constructor(arg0: I, arg1: () => S)
    prefixMap(arg0: string): { [key: string]: S };
    prefixQuery(arg0: string): Stream<S>;
    prefixQueryFlat(arg0: string): Stream<Identifier>;
}