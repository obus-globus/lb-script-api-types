import type { BlockTree } from '../../../../com/sun/source/tree/BlockTree.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { VariableTree } from '../../../../com/sun/source/tree/VariableTree.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CatchTree extends Tree, Object{
    getBlock(): BlockTree;
    getKind(): Tree$Kind;
    getParameter(): VariableTree;
}