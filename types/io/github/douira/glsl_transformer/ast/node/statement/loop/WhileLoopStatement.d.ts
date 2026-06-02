import type { IterationConditionInitializer } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/IterationConditionInitializer.d.ts'
import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Expression } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { Statement } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement.d.ts'
import type { Statement$StatementType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement$StatementType.d.ts'
import type { ConditionLoopStatement } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/loop/ConditionLoopStatement.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTListener } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTListener.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class WhileLoopStatement extends ConditionLoopStatement {
    static clone(paramarg0: Object | null): Object | null;
    static clone(paramarg0: (Object | null)[]): Stream<Object>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: IterationConditionInitializer, arg1: Statement)
    constructor(arg0: Expression, arg1: Statement)
    private constructor(arg0: Statement, arg1: Expression, arg2: IterationConditionInitializer)
    iterationConditionInitializer: IterationConditionInitializer;
    clone(): WhileLoopStatement;
    cloneInto(arg0: Root): WhileLoopStatement;
    enterNode(arg0: ASTListener): void;
    exitNode(arg0: ASTListener): void;
    getIterationConditionInitializer(): IterationConditionInitializer;
    getStatementType(): Statement$StatementType;
    setIterationConditionInitializer(arg0: IterationConditionInitializer): void;
    statementAccept<R extends Object | number | string | boolean>(arg0: ASTVisitor<R>): R;
}