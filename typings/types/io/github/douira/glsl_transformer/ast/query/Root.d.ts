import type { Identifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Expression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { ExternalDeclarationIndex } from '../../../../../../io/github/douira/glsl_transformer/ast/query/index/ExternalDeclarationIndex.d.ts'
import type { IdentifierIndex } from '../../../../../../io/github/douira/glsl_transformer/ast/query/index/IdentifierIndex.d.ts'
import type { NodeIndex } from '../../../../../../io/github/douira/glsl_transformer/ast/query/index/NodeIndex.d.ts'
import type { PrefixExternalDeclarationIndex } from '../../../../../../io/github/douira/glsl_transformer/ast/query/index/PrefixExternalDeclarationIndex.d.ts'
import type { PrefixIdentifierIndex } from '../../../../../../io/github/douira/glsl_transformer/ast/query/index/PrefixIdentifierIndex.d.ts'
import type { HintedMatcher } from '../../../../../../io/github/douira/glsl_transformer/ast/query/match/HintedMatcher.d.ts'
import type { Matcher } from '../../../../../../io/github/douira/glsl_transformer/ast/query/match/Matcher.d.ts'
import type { ASTParser } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTParser.d.ts'
import type { Passthrough } from '../../../../../../io/github/douira/glsl_transformer/util/Passthrough.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Root extends Object {
    static getActiveBuildRoot(): Root;
    static replaceExpressionsConcurrent(paramarg0: ASTParser, paramarg1: Expression[], paramarg2: string): boolean;
    constructor(arg0: NodeIndex<any>, arg1: IdentifierIndex<any, any>, arg2: ExternalDeclarationIndex<any, any>)
    // private activity: boolean;
    externalDeclarationIndex: ExternalDeclarationIndex<any, any>;
    identifierIndex: IdentifierIndex<any, any>;
    nodeIndex: NodeIndex<any>;
    // private nodeList: ASTNode[];
    // private ensureEmptyNodeList(): void;
    getPrefixExternalDeclarationIndex(): PrefixExternalDeclarationIndex<any, any>;
    getPrefixIdentifierIndex(): PrefixIdentifierIndex<any, any>;
    indexBuildSession(arg0: () => void): void;
    indexBuildSession(arg0: (param0: Root) => void): void;
    indexNodes<N extends ASTNode>(arg0: () => N): N;
    indexSeparateTrees<N extends ASTNode>(arg0: (param0: (param0: N) => N) => void): void;
    process<N extends ASTNode>(arg0: Stream<N>, arg1: (param0: N) => void): boolean;
    process(arg0: string, arg1: (param0: Identifier) => void): boolean;
    processMatches<N extends ASTNode>(arg0: ASTParser, arg1: HintedMatcher<N>, arg2: (param0: N) => void): boolean;
    processMatches<N extends ASTNode>(arg0: ASTParser, arg1: Stream<ASTNode>, arg2: Matcher<N>, arg3: (param0: N) => void): boolean;
    registerFastRename(arg0: ASTNode): void;
    registerIdentifierRename(arg0: Identifier): void;
    registerNode(arg0: ASTNode, arg1: boolean): void;
    rename(arg0: string, arg1: string): boolean;
    replaceExpressionMatches<N extends Expression>(arg0: ASTParser, arg1: HintedMatcher<N>, arg2: string): boolean;
    replaceExpressionMatches<N extends Expression>(arg0: ASTParser, arg1: Stream<ASTNode>, arg2: Matcher<N>, arg3: string): boolean;
    replaceExpressions(arg0: ASTParser, arg1: Stream<Expression>, arg2: string): boolean;
    replaceReferenceExpressions(arg0: ASTParser, arg1: Stream<Identifier>, arg2: string): void;
    replaceReferenceExpressions(arg0: ASTParser, arg1: string, arg2: string): void;
    replaceReferenceExpressionsReport(arg0: ASTParser, arg1: Stream<Identifier>, arg2: string): boolean;
    replaceReferenceExpressionsReport(arg0: ASTParser, arg1: string, arg2: string): boolean;
    unregisterFastRename(arg0: ASTNode): void;
    unregisterIdentifierRename(arg0: Identifier): void;
    unregisterNode(arg0: ASTNode, arg1: boolean): void;
    withActiveBuildRoot<R extends Object | number | string | boolean>(arg0: (param0: Root) => R): R;
}