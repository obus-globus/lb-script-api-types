import type { CompilationUnitTree } from '../../../../com/sun/source/tree/CompilationUnitTree.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SourcePositions extends Object{
    getEndPosition(arg0: CompilationUnitTree, arg1: Tree): number;
    getStartPosition(arg0: CompilationUnitTree, arg1: Tree): number;
}