import type { DocCommentTree } from '../../../../com/sun/source/doctree/DocCommentTree.d.ts'
import type { DocTree } from '../../../../com/sun/source/doctree/DocTree.d.ts'
import type { CompilationUnitTree } from '../../../../com/sun/source/tree/CompilationUnitTree.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { SourcePositions } from '../../../../com/sun/source/util/SourcePositions.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DocSourcePositions extends SourcePositions, Object{
    getEndPosition(arg0: CompilationUnitTree, arg1: DocCommentTree, arg2: DocTree): number;
    getEndPosition(arg0: CompilationUnitTree, arg1: Tree): number;
    getStartPosition(arg0: CompilationUnitTree, arg1: DocCommentTree, arg2: DocTree): number;
    getStartPosition(arg0: CompilationUnitTree, arg1: Tree): number;
}