import type { AnnotationTree } from '../../../../com/sun/source/tree/AnnotationTree.d.ts'
import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { ImportTree } from '../../../../com/sun/source/tree/ImportTree.d.ts'
import type { LineMap } from '../../../../com/sun/source/tree/LineMap.d.ts'
import type { ModuleTree } from '../../../../com/sun/source/tree/ModuleTree.d.ts'
import type { PackageTree } from '../../../../com/sun/source/tree/PackageTree.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { JavaFileObject } from '../../../../javax/tools/JavaFileObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CompilationUnitTree extends Tree, Object{
    getImports(): ImportTree[];
    getKind(): Tree$Kind;
    getLineMap(): LineMap;
    getModule(): ModuleTree;
    getPackage(): PackageTree;
    getPackageAnnotations(): AnnotationTree[];
    getPackageName(): ExpressionTree;
    getSourceFile(): JavaFileObject;
    getTypeDecls(): Tree[];
}