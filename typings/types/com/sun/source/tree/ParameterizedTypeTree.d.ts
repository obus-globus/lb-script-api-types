import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ParameterizedTypeTree extends Tree, Object{
    getKind(): Tree$Kind;
    getType(): Tree;
    getTypeArguments(): Tree[];
}