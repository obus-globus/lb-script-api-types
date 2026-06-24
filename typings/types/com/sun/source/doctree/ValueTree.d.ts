import type { DocTree$Kind } from '../../../../com/sun/source/doctree/DocTree$Kind.d.ts'
import type { InlineTagTree } from '../../../../com/sun/source/doctree/InlineTagTree.d.ts'
import type { ReferenceTree } from '../../../../com/sun/source/doctree/ReferenceTree.d.ts'
import type { TextTree } from '../../../../com/sun/source/doctree/TextTree.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ValueTree extends InlineTagTree, Object{
    getFormat(): TextTree;
    getKind(): DocTree$Kind;
    getReference(): ReferenceTree;
    getTagName(): string;
}