import type { ASTNode } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/abstract_node/ASTNode.d.ts'
import type { Statement$StatementType } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/Statement$StatementType.d.ts'
import type { TerminalStatement } from '../../../../../../../../io/github/douira/glsl_transformer/ast/node/statement/terminal/TerminalStatement.d.ts'
import type { Root } from '../../../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTVisitor } from '../../../../../../../../io/github/douira/glsl_transformer/ast/traversal/ASTVisitor.d.ts'
import type { Stream } from '../../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class DemoteStatement extends TerminalStatement {
    static clone<N extends ASTNode>(paramarg0: N): N;
    static clone<N extends ASTNode>(paramarg0: N[]): Stream<N>;
    static swap(paramarg0: ASTNode, paramarg1: ASTNode): boolean;
    constructor()
    clone(): DemoteStatement;
    cloneInto(arg0: Root): DemoteStatement;
    getStatementType(): Statement$StatementType;
    statementAccept<R extends unknown>(arg0: ASTVisitor<R>): R;
}