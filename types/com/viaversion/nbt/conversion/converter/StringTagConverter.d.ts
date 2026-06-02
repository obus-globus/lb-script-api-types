import type { TagConverter } from '../../../../../com/viaversion/nbt/conversion/TagConverter.d.ts'
import type { StringTag } from '../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class StringTagConverter extends Object implements TagConverter<StringTag, string> {
    constructor()
    convert(arg0: StringTag): string;
    convert(arg0: string): StringTag;
}