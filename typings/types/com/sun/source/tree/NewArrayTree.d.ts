import type { AnnotationTree } from '../../../../com/sun/source/tree/AnnotationTree.d.ts'
import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface NewArrayTree extends ExpressionTree, Object{
    getAnnotations(): AnnotationTree[];
    getDimAnnotations(): AnnotationTree[][];
    getDimensions(): ExpressionTree[];
    getInitializers(): ExpressionTree[];
    getKind(): Tree$Kind;
    getType(): Tree;
}