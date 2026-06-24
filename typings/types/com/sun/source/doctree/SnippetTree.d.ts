import type { DocTree } from '../../../../com/sun/source/doctree/DocTree.d.ts'
import type { DocTree$Kind } from '../../../../com/sun/source/doctree/DocTree$Kind.d.ts'
import type { InlineTagTree } from '../../../../com/sun/source/doctree/InlineTagTree.d.ts'
import type { TextTree } from '../../../../com/sun/source/doctree/TextTree.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SnippetTree extends InlineTagTree, Object{
    getAttributes(): DocTree[];
    getBody(): TextTree;
    getKind(): DocTree$Kind;
    getTagName(): string;
}