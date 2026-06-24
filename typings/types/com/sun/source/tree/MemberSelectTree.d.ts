import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MemberSelectTree extends ExpressionTree, Object{
    getExpression(): ExpressionTree;
    getIdentifier(): Name;
    getKind(): Tree$Kind;
}