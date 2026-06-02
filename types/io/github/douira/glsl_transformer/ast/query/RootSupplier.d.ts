import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ExternalDeclarationIndex } from '../../../../../../io/github/douira/glsl_transformer/ast/query/index/ExternalDeclarationIndex.d.ts'
import type { IdentifierIndex } from '../../../../../../io/github/douira/glsl_transformer/ast/query/index/IdentifierIndex.d.ts'
import type { NodeIndex } from '../../../../../../io/github/douira/glsl_transformer/ast/query/index/NodeIndex.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RootSupplier extends Object implements Supplier<Root> {
    static DEFAULT: RootSupplier;
    static EMPTY: RootSupplier;
    static EXACT_UNORDERED: RootSupplier;
    static EXACT_UNORDERED_ED_EXACT: RootSupplier;
    static ONLY_IDENTIFIER_INDEX: RootSupplier;
    static ONLY_NODE_INDEX: RootSupplier;
    static PREFIX_UNORDERED: RootSupplier;
    static PREFIX_UNORDERED_ED_EXACT: RootSupplier;
    static PREFIX_UNORDERED_ED_PREFIX: RootSupplier;
    static supplyDefault(): Root;
    constructor(arg0: () => NodeIndex<Object>, arg1: () => IdentifierIndex<Object, Object>)
    constructor(arg0: () => NodeIndex<Object>, arg1: () => IdentifierIndex<Object, Object>, arg2: () => ExternalDeclarationIndex<Object, Object>)
    // private externalDeclarationIndexSupplier: () => ExternalDeclarationIndex<Object, Object>;
    // private identifierIndexSupplier: () => IdentifierIndex<Object, Object>;
    // private nodeIndexSupplier: () => NodeIndex<Object>;
    get(): Root;
    setIdentifierIndex(arg0: () => IdentifierIndex<Object, Object>): RootSupplier;
    setNodeIndex(arg0: () => NodeIndex<Object>): RootSupplier;
}