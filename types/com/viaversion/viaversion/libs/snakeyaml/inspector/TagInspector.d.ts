import type { Tag } from '../../../../../../com/viaversion/viaversion/libs/snakeyaml/nodes/Tag.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface TagInspector extends Object{
    isGlobalTagAllowed(arg0: Tag): boolean;
}