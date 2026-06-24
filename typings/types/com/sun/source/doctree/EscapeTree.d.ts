import type { DocTree$Kind } from '../../../../com/sun/source/doctree/DocTree$Kind.d.ts'
import type { TextTree } from '../../../../com/sun/source/doctree/TextTree.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface EscapeTree extends TextTree, Object{
    getBody(): string;
    getKind(): DocTree$Kind;
}