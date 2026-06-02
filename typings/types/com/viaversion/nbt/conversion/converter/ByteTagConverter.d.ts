import type { TagConverter } from '../../../../../com/viaversion/nbt/conversion/TagConverter.d.ts'
import type { ByteTag } from '../../../../../com/viaversion/nbt/tag/ByteTag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteTagConverter extends Object implements TagConverter<ByteTag, number> {
    constructor()
    convert(arg0: ByteTag): number;
    convert(arg0: number): ByteTag;
}