import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Expression } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { Statement$StatementType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement$StatementType.d.ts'
import type { SemiTerminalStatement } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/SemiTerminalStatement.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class ReturnStatement extends SemiTerminalStatement {
    static clone(paramarg0: Object | null): Object | null;
    static clone(paramarg0: (Object | null)[]): Stream<Object>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor()
    constructor(arg0: Expression)
    expression: Expression;
    clone(): ReturnStatement;
    cloneInto(arg0: Root): ReturnStatement;
    getExpression(): Expression;
    getStatementType(): Statement$StatementType;
    setExpression(arg0: Expression): void;
    statementAccept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
}