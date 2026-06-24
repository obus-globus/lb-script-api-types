import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { StatementTree } from '../../../../com/sun/source/tree/StatementTree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ReturnTree extends StatementTree, Object{
    getExpression(): ExpressionTree;
    getKind(): Tree$Kind;
}