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
    constructor(arg0: () => NodeIndex<any>, arg1: () => IdentifierIndex<any, any>)
    constructor(arg0: () => NodeIndex<any>, arg1: () => IdentifierIndex<any, any>, arg2: () => ExternalDeclarationIndex<any, any>)
    // private externalDeclarationIndexSupplier: () => ExternalDeclarationIndex<any, any>;
    // private identifierIndexSupplier: () => IdentifierIndex<any, any>;
    // private nodeIndexSupplier: () => NodeIndex<any>;
    get(): Root;
    setIdentifierIndex(arg0: () => IdentifierIndex<any, any>): RootSupplier;
    setNodeIndex(arg0: () => NodeIndex<any>): RootSupplier;
}