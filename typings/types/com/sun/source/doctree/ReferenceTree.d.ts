import type { DocTree } from '../../../../com/sun/source/doctree/DocTree.d.ts'
import type { DocTree$Kind } from '../../../../com/sun/source/doctree/DocTree$Kind.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ReferenceTree extends DocTree, Object{
    getKind(): DocTree$Kind;
    getSignature(): string;
}