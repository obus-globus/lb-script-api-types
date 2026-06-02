import type { ExternalDeclarationIndex } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/ExternalDeclarationIndex.d.ts'
import type { ExternalDeclarationIndex$DeclarationEntry } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/ExternalDeclarationIndex$DeclarationEntry.d.ts'
import type { PrefixQueryable } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/PrefixQueryable.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class PrefixExternalDeclarationIndex<S extends ExternalDeclarationIndex$DeclarationEntry[], I extends PatriciaTrie<S>> extends ExternalDeclarationIndex<S, I> implements PrefixQueryable<S, ExternalDeclarationIndex$DeclarationEntry> {
    static withOnlyExact(paramarg0: () => Object | null): ExternalDeclarationIndex<Object, Object>;
    static withOnlyExact(): ExternalDeclarationIndex<Object, Object>;
    static withOnlyExactOrdered(): ExternalDeclarationIndex<Object, Object>;
    static withPermuterm(paramarg0: () => Object | null): PrefixExternalDeclarationIndex<Object, Object>;
    static withPermuterm(): PrefixExternalDeclarationIndex<Object, Object>;
    static withPrefix(paramarg0: () => Object | null): PrefixExternalDeclarationIndex<Object, Object>;
    static withPrefix(): PrefixExternalDeclarationIndex<Object, Object>;
    static withPrefixSuffix(paramarg0: () => Object | null): PrefixExternalDeclarationIndex<Object, Object>;
    static withPrefixSuffix(): PrefixExternalDeclarationIndex<Object, Object>;
    constructor(arg0: I, arg1: () => S)
    prefixMap(arg0: string): { [key: string]: S };
    prefixQuery(arg0: string): Stream<S>;
    prefixQueryFlat(arg0: string): Stream<E>;
}