import type { CaseLabelTree } from '../../../../com/sun/source/tree/CaseLabelTree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DefaultCaseLabelTree extends CaseLabelTree, Object{
    getKind(): Tree$Kind;
}