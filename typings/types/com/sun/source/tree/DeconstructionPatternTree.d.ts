import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { PatternTree } from '../../../../com/sun/source/tree/PatternTree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DeconstructionPatternTree extends PatternTree, Object{
    getDeconstructor(): ExpressionTree;
    getKind(): Tree$Kind;
    getNestedPatterns(): PatternTree[];
}