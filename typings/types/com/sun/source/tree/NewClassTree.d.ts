import type { ClassTree } from '../../../../com/sun/source/tree/ClassTree.d.ts'
import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface NewClassTree extends ExpressionTree, Object{
    getArguments(): ExpressionTree[];
    getClassBody(): ClassTree;
    getEnclosingExpression(): ExpressionTree;
    getIdentifier(): ExpressionTree;
    getKind(): Tree$Kind;
    getTypeArguments(): Tree[];
}