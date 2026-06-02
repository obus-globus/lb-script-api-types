import type { TagConverter } from '../../../../../com/viaversion/nbt/conversion/TagConverter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ListTagConverter extends Object implements TagConverter<T[], Object[]> {
    constructor()
    convert(arg0: T[]): (Object | null)[];
    convert(arg0: (Object | null)[]): T[];
}