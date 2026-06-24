import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { MemberReferenceTree$ReferenceMode } from '../../../../com/sun/source/tree/MemberReferenceTree$ReferenceMode.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MemberReferenceTree extends ExpressionTree, Object{
    getKind(): Tree$Kind;
    getMode(): MemberReferenceTree$ReferenceMode;
    getName(): Name;
    getQualifierExpression(): ExpressionTree;
    getTypeArguments(): ExpressionTree[];
}