import type { ASTNode } from '../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Expression } from '../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { ExternalDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/ExternalDeclaration.d.ts'
import type { Statement } from '../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement.d.ts'
import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Template<N extends ASTNode> extends Object {
    static ofCloned(paramarg0: ASTNode | null): Template<ASTNode>;
    static withExpression(paramarg0: string): Template<Expression>;
    static withExternalDeclaration(paramarg0: string): Template<ExternalDeclaration>;
    static withStatement(paramarg0: string): Template<Statement>;
    constructor(arg0: N)
    // private localReplacements: ASTNode[];
    // private localReplacementsMarked: number;
    // private replacements: Map<ASTNode, () => ASTNode>;
    readonly source: N;
    getInstanceFor(arg0: Root): N;
    getInstanceFor(arg0: Root, arg1: ASTNode): N;
    getInstanceFor(arg0: Root, arg1: ASTNode[]): N;
    getReplacement<R extends Object | number | string | boolean>(arg0: R): R;
    getSource(): N;
    getSourceRoot(): Root;
    markIdentifierReplacement(arg0: string): void;
    markIdentifierReplacement(arg0: string, arg1: () => ASTNode): void;
    markLocalReplacement(arg0: ASTNode): void;
    markLocalReplacement(arg0: string, arg1: Class<ASTNode>): void;
    markReplacement(arg0: ASTNode, arg1: () => ASTNode): void;
    markReplacement<NN extends ASTNode>(arg0: string, arg1: Class<NN>, arg2: () => NN): void;
    supplyLocalReplacements(arg0: ASTNode): void;
    supplyLocalReplacements(arg0: ASTNode[]): void;
}