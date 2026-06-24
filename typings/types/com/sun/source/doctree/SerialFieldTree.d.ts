import type { BlockTagTree } from '../../../../com/sun/source/doctree/BlockTagTree.d.ts'
import type { DocTree } from '../../../../com/sun/source/doctree/DocTree.d.ts'
import type { DocTree$Kind } from '../../../../com/sun/source/doctree/DocTree$Kind.d.ts'
import type { IdentifierTree } from '../../../../com/sun/source/doctree/IdentifierTree.d.ts'
import type { ReferenceTree } from '../../../../com/sun/source/doctree/ReferenceTree.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface SerialFieldTree extends BlockTagTree, Object{
    getDescription(): DocTree[];
    getKind(): DocTree$Kind;
    getName(): IdentifierTree;
    getTagName(): string;
    getType(): ReferenceTree;
}