import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { LambdaExpressionTree$BodyKind } from '../../../../com/sun/source/tree/LambdaExpressionTree$BodyKind.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { VariableTree } from '../../../../com/sun/source/tree/VariableTree.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LambdaExpressionTree extends ExpressionTree, Object{
    getBody(): Tree;
    getBodyKind(): LambdaExpressionTree$BodyKind;
    getKind(): Tree$Kind;
    getParameters(): VariableTree[];
}