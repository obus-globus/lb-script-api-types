import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ConditionalExpressionTree extends ExpressionTree, Object{
    getCondition(): ExpressionTree;
    getFalseExpression(): ExpressionTree;
    getKind(): Tree$Kind;
    getTrueExpression(): ExpressionTree;
}