import type { DocTree$Kind } from '../../../../com/sun/source/doctree/DocTree$Kind.d.ts'
import type { InlineTagTree } from '../../../../com/sun/source/doctree/InlineTagTree.d.ts'
import type { ReferenceTree } from '../../../../com/sun/source/doctree/ReferenceTree.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InheritDocTree extends InlineTagTree, Object{
    getKind(): DocTree$Kind;
    getSupertype(): ReferenceTree;
    getTagName(): string;
}