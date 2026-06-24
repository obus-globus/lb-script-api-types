import type { CaseLabelTree } from '../../../../com/sun/source/tree/CaseLabelTree.d.ts'
import type { PatternTree } from '../../../../com/sun/source/tree/PatternTree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface PatternCaseLabelTree extends CaseLabelTree, Object{
    getKind(): Tree$Kind;
    getPattern(): PatternTree;
}