import type { TagInspector } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/inspector/TagInspector.d.ts'
import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class UnTrustedTagInspector extends Object implements TagInspector {
    constructor()
    isGlobalTagAllowed(arg0: Tag): boolean;
}