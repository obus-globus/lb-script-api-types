import type { ExternalDeclarationIndex } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/ExternalDeclarationIndex.d.ts'
import type { ExternalDeclarationIndex$DeclarationEntry } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/ExternalDeclarationIndex$DeclarationEntry.d.ts'
import type { PrefixQueryable } from '../../../../../../../io/github/douira/glsl_transformer/ast/query/index/PrefixQueryable.d.ts'
import type { Supplier } from '../../../../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
export class PrefixExternalDeclarationIndex<S extends ExternalDeclarationIndex$DeclarationEntry[], I extends { [key: string]: any }> extends ExternalDeclarationIndex<S, I> implements PrefixQueryable<S, ExternalDeclarationIndex$DeclarationEntry> {
    static withOnlyExact<R extends ExternalDeclarationIndex$DeclarationEntry[]>(paramarg0: () => R): ExternalDeclarationIndex<R, { [key: string]: R }>;
    static withOnlyExact(): ExternalDeclarationIndex<ExternalDeclarationIndex$DeclarationEntry[], { [key: string]: ExternalDeclarationIndex$DeclarationEntry[] }>;
    static withOnlyExactOrdered(): ExternalDeclarationIndex<ExternalDeclarationIndex$DeclarationEntry[], { [key: string]: ExternalDeclarationIndex$DeclarationEntry[] }>;
    static withPermuterm<R extends ExternalDeclarationIndex$DeclarationEntry[]>(paramarg0: () => R): PrefixExternalDeclarationIndex<R, Map<R, ExternalDeclarationIndex$DeclarationEntry>>;
    static withPermuterm(): PrefixExternalDeclarationIndex<ExternalDeclarationIndex$DeclarationEntry[], Map<ExternalDeclarationIndex$DeclarationEntry[], ExternalDeclarationIndex$DeclarationEntry>>;
    static withPrefix<R extends ExternalDeclarationIndex$DeclarationEntry[]>(paramarg0: () => R): PrefixExternalDeclarationIndex<R, Map<R, ExternalDeclarationIndex$DeclarationEntry>>;
    static withPrefix(): PrefixExternalDeclarationIndex<ExternalDeclarationIndex$DeclarationEntry[], Map<ExternalDeclarationIndex$DeclarationEntry[], ExternalDeclarationIndex$DeclarationEntry>>;
    static withPrefixSuffix<R extends ExternalDeclarationIndex$DeclarationEntry[]>(paramarg0: () => R): PrefixExternalDeclarationIndex<R, Map<R, ExternalDeclarationIndex$DeclarationEntry>>;
    static withPrefixSuffix(): PrefixExternalDeclarationIndex<ExternalDeclarationIndex$DeclarationEntry[], Map<ExternalDeclarationIndex$DeclarationEntry[], ExternalDeclarationIndex$DeclarationEntry>>;
    constructor(arg0: I, arg1: () => S)
    prefixMap(arg0: string): { [key: string]: S };
    prefixQuery(arg0: string): Stream<S>;
    prefixQueryFlat(arg0: string): Stream<ExternalDeclarationIndex$DeclarationEntry>;
}