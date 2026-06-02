import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Ops$MapSerializer } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops$MapSerializer.d.ts'
import type { TagType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/TagType.d.ts'
export class TextComponentTagType extends TagType {
    constructor()
    write(arg0: Ops, arg1: Tag): void;
    // private write(arg0: Ops$MapSerializer, arg1: string, arg2: Tag): void;
}