import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Expression } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/expression/Expression.d.ts'
import type { Statement } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement.d.ts'
import type { LoopStatement } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/loop/LoopStatement.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
export abstract class ConditionLoopStatement extends LoopStatement {
    static clone<N extends ASTNode>(paramarg0: N): N;
    static clone<N extends ASTNode>(paramarg0: N[]): Stream<N>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor(arg0: Statement, arg1: Expression)
    condition: Expression;
    clone(): ConditionLoopStatement;
    cloneInto(arg0: Root): ConditionLoopStatement;
    getCondition(): Expression;
    setCondition(arg0: Expression): void;
}