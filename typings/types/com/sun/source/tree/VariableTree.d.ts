import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { ModifiersTree } from '../../../../com/sun/source/tree/ModifiersTree.d.ts'
import type { StatementTree } from '../../../../com/sun/source/tree/StatementTree.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface VariableTree extends StatementTree, Object{
    getInitializer(): ExpressionTree;
    getKind(): Tree$Kind;
    getModifiers(): ModifiersTree;
    getName(): Name;
    getNameExpression(): ExpressionTree;
    getType(): Tree;
}