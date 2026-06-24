import type { ExpressionStatementTree } from '../../../../com/sun/source/tree/ExpressionStatementTree.d.ts'
import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { StatementTree } from '../../../../com/sun/source/tree/StatementTree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ForLoopTree extends StatementTree, Object{
    getCondition(): ExpressionTree;
    getInitializer(): StatementTree[];
    getKind(): Tree$Kind;
    getStatement(): StatementTree;
    getUpdate(): ExpressionStatementTree[];
}