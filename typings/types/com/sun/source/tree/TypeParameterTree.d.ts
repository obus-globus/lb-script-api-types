import type { AnnotationTree } from '../../../../com/sun/source/tree/AnnotationTree.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TypeParameterTree extends Tree, Object{
    getAnnotations(): AnnotationTree[];
    getBounds(): Tree[];
    getKind(): Tree$Kind;
    getName(): Name;
}