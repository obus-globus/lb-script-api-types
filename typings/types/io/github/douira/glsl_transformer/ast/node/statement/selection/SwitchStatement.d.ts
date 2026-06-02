import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Expression } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { CompoundStatement } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/CompoundStatement.d.ts'
import type { Statement } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement.d.ts'
import type { Statement$StatementType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement$StatementType.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class SwitchStatement extends Statement {
    static clone(paramarg0: Object | null): Object | null;
    static clone(paramarg0: (Object | null)[]): Stream<Object>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: Expression, arg1: CompoundStatement)
    expression: Expression;
    statement: CompoundStatement;
    accept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
    clone(): SwitchStatement;
    cloneInto(arg0: Root): SwitchStatement;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getExpression(): Expression;
    getStatement(): CompoundStatement;
    getStatementType(): Statement$StatementType;
    setExpression(arg0: Expression): void;
    setStatement(arg0: CompoundStatement): void;
    statementAccept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
}