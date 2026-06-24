import type { BlockTree } from '../../../../com/sun/source/tree/BlockTree.d.ts'
import type { CatchTree } from '../../../../com/sun/source/tree/CatchTree.d.ts'
import type { StatementTree } from '../../../../com/sun/source/tree/StatementTree.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TryTree extends StatementTree, Object{
    getBlock(): BlockTree;
    getCatches(): CatchTree[];
    getFinallyBlock(): BlockTree;
    getKind(): Tree$Kind;
    getResources(): Tree[];
}