import type { StatementTree } from '../../../../com/sun/source/tree/StatementTree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ContinueTree extends StatementTree, Object{
    getKind(): Tree$Kind;
    getLabel(): Name;
}