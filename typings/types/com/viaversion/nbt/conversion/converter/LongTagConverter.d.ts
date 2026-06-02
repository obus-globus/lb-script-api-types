import type { TagConverter } from '../../../../../com/viaversion/nbt/conversion/TagConverter.d.ts'
import type { LongTag } from '../../../../../com/viaversion/nbt/tag/LongTag.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongTagConverter extends Object implements TagConverter<LongTag, number> {
    constructor()
    convert(arg0: LongTag): number;
    convert(arg0: number): LongTag;
}