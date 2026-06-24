import type { AnnotationTree } from '../../../../com/sun/source/tree/AnnotationTree.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Modifier } from '../../../../javax/lang/model/element/Modifier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ModifiersTree extends Tree, Object{
    getAnnotations(): AnnotationTree[];
    getFlags(): Modifier[];
    getKind(): Tree$Kind;
}