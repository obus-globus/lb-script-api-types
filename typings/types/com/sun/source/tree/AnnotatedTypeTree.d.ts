import type { AnnotationTree } from '../../../../com/sun/source/tree/AnnotationTree.d.ts'
import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface AnnotatedTypeTree extends ExpressionTree, Object{
    getAnnotations(): AnnotationTree[];
    getKind(): Tree$Kind;
    getUnderlyingType(): ExpressionTree;
}