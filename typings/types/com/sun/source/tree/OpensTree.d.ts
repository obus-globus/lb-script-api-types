import type { DirectiveTree } from '../../../../com/sun/source/tree/DirectiveTree.d.ts'
import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface OpensTree extends DirectiveTree, Object{
    getKind(): Tree$Kind;
    getModuleNames(): ExpressionTree[];
    getPackageName(): ExpressionTree;
}