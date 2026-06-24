import type { AnnotationTree } from '../../../../com/sun/source/tree/AnnotationTree.d.ts'
import type { DirectiveTree } from '../../../../com/sun/source/tree/DirectiveTree.d.ts'
import type { ExpressionTree } from '../../../../com/sun/source/tree/ExpressionTree.d.ts'
import type { ModuleTree$ModuleKind } from '../../../../com/sun/source/tree/ModuleTree$ModuleKind.d.ts'
import type { Tree } from '../../../../com/sun/source/tree/Tree.d.ts'
import type { Tree$Kind } from '../../../../com/sun/source/tree/Tree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ModuleTree extends Tree, Object{
    getAnnotations(): AnnotationTree[];
    getDirectives(): DirectiveTree[];
    getKind(): Tree$Kind;
    getModuleType(): ModuleTree$ModuleKind;
    getName(): ExpressionTree;
}