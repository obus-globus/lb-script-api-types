import type { BlockTagTree } from '../../../../com/sun/source/doctree/BlockTagTree.d.ts'
import type { DocTree } from '../../../../com/sun/source/doctree/DocTree.d.ts'
import type { DocTree$Kind } from '../../../../com/sun/source/doctree/DocTree$Kind.d.ts'
import type { TextTree } from '../../../../com/sun/source/doctree/TextTree.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SpecTree extends BlockTagTree, Object{
    getKind(): DocTree$Kind;
    getTagName(): string;
    getTitle(): DocTree[];
    getURL(): TextTree;
}