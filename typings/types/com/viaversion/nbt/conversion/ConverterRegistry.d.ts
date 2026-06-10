import type { TagConverter } from '../../../../com/viaversion/nbt/conversion/TagConverter.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConverterRegistry extends Object {
    static convertToTag(paramarg0: Object | null): Tag | null;
    static convertToValue(paramarg0: Tag | null): Object | null;
    static register(paramarg0: Class<Tag>, paramarg1: Class<Object>, paramarg2: TagConverter<Tag, Object>): void;
    static unregister(paramarg0: Class<Tag>, paramarg1: Class<Object>): void;
    constructor()
}