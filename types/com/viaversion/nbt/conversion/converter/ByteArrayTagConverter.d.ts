import type { TagConverter } from '../../../../../com/viaversion/nbt/conversion/TagConverter.d.ts'
import type { ByteArrayTag } from '../../../../../com/viaversion/nbt/tag/ByteArrayTag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteArrayTagConverter extends Object implements TagConverter<ByteArrayTag, number[]> {
    constructor()
    convert(arg0: ByteArrayTag): number[];
    convert(arg0: number[]): ByteArrayTag;
}