import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MethodInvocationTree extends ExpressionTree, Object{
    getArguments(): ExpressionTree[];
    getKind(): Tree$Kind;
    getMethodSelect(): ExpressionTree;
    getTypeArguments(): Tree[];
}