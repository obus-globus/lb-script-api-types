import type { StatementTree } from '../../../../com/sun/source/tree/StatementTree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BlockTree extends StatementTree, Object{
    getKind(): Tree$Kind;
    getStatements(): StatementTree[];
    isStatic(): boolean;
}