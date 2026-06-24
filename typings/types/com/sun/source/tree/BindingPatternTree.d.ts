import type { PatternTree } from '../../../../com/sun/source/tree/PatternTree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { VariableTree } from '../../../../com/sun/source/tree/VariableTree.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface BindingPatternTree extends PatternTree, Object{
    getKind(): Tree$Kind;
    getVariable(): VariableTree;
}