import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Expression } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { Statement } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement.d.ts'
import type { Statement$StatementType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement$StatementType.d.ts'
import type { SemiTerminalStatement } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/SemiTerminalStatement.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class SelectionStatement extends SemiTerminalStatement {
    static clone(paramarg0: ASTNode | null): ASTNode | null;
    static clone(paramarg0: (ASTNode | null)[]): Stream<ASTNode>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: Expression, arg1: Statement)
    constructor(arg0: Expression, arg1: Statement, arg2: Statement)
    condition: Expression;
    ifFalse: Statement;
    ifTrue: Statement;
    clone(): SelectionStatement;
    cloneInto(arg0: Root): SelectionStatement;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getCondition(): Expression;
    getIfFalse(): Statement;
    getIfTrue(): Statement;
    getStatementType(): Statement$StatementType;
    hasIfFalse(): boolean;
    setCondition(arg0: Expression): void;
    setIfFalse(arg0: Statement): void;
    setIfTrue(arg0: Statement): void;
    statementAccept<R extends unknown>(arg0: ASTVisitor<R>): R;
}