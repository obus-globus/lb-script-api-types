import type { BlockTree } from '../../../../com/sun/source/tree/BlockTree.d.ts'
import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { ModifiersTree } from '../../../../com/sun/source/tree/ModifiersTree.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { TypeParameterTree } from '../../../../com/sun/source/tree/TypeParameterTree.d.ts'
import type { VariableTree } from '../../../../com/sun/source/tree/VariableTree.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MethodTree extends Tree, Object{
    getBody(): BlockTree;
    getDefaultValue(): Tree;
    getKind(): Tree$Kind;
    getModifiers(): ModifiersTree;
    getName(): Name;
    getParameters(): VariableTree[];
    getReceiverParameter(): VariableTree;
    getReturnType(): Tree;
    getThrows(): ExpressionTree[];
    getTypeParameters(): TypeParameterTree[];
}