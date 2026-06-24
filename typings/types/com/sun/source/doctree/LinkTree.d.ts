import type { DocTree } from '../../../../com/sun/source/doctree/DocTree.d.ts'
import type { DocTree$Kind } from '../../../../com/sun/source/doctree/DocTree$Kind.d.ts'
import type { InlineTagTree } from '../../../../com/sun/source/doctree/InlineTagTree.d.ts'
import type { ReferenceTree } from '../../../../com/sun/source/doctree/ReferenceTree.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LinkTree extends InlineTagTree, Object{
    getKind(): DocTree$Kind;
    getLabel(): DocTree[];
    getReference(): ReferenceTree;
    getTagName(): string;
}