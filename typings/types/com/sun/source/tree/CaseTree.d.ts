import type { CaseLabelTree } from '../../../../com/sun/source/tree/CaseLabelTree.d.ts'
import type { CaseTree$CaseKind } from '../../../../com/sun/source/tree/CaseTree$CaseKind.d.ts'
import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { StatementTree } from '../../../../com/sun/source/tree/StatementTree.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CaseTree extends Tree, Object{
    getBody(): Tree;
    getCaseKind(): CaseTree$CaseKind;
    getExpression(): ExpressionTree;
    getExpressions(): ExpressionTree[];
    getGuard(): ExpressionTree;
    getKind(): Tree$Kind;
    getLabels(): CaseLabelTree[];
    getStatements(): StatementTree[];
}