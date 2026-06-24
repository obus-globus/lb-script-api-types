import type { CaseLabelTree } from '../../../../com/sun/source/tree/CaseLabelTree.d.ts'
import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ConstantCaseLabelTree extends CaseLabelTree, Object{
    getConstantExpression(): ExpressionTree;
    getKind(): Tree$Kind;
}