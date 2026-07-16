import type { TagConverter } from '../../../../com/viaversion/nbt/conversion/TagConverter.d.ts'
import type { Tag } from '../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ConverterRegistry extends Object {
    static convertToTag<V extends unknown, T extends Tag>(paramarg0: V): T;
    static convertToValue<T extends Tag, V extends unknown>(paramarg0: T): V;
    static register<T extends Tag, V extends unknown>(paramarg0: Class<T>, paramarg1: Class<V>, paramarg2: TagConverter<T, V>): void;
    static unregister<T extends Tag, V extends unknown>(paramarg0: Class<T>, paramarg1: Class<V>): void;
    constructor()
}