import type { DocTree } from '../../../../com/sun/source/doctree/DocTree.d.ts'
import type { DocTree$Kind } from '../../../../com/sun/source/doctree/DocTree$Kind.d.ts'
import type { Name } from '../../../../javax/lang/model/element/Name.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface StartElementTree extends DocTree, Object{
    getAttributes(): DocTree[];
    getKind(): DocTree$Kind;
    getName(): Name;
    isSelfClosing(): boolean;
}