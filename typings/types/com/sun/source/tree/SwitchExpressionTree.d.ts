import type { CaseTree } from '../../../../com/sun/source/tree/CaseTree.d.ts'
import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SwitchExpressionTree extends ExpressionTree, Object{
    getCases(): CaseTree[];
    getExpression(): ExpressionTree;
    getKind(): Tree$Kind;
}