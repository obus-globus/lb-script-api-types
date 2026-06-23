import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ImmutableEntry } from '../../../../../../../org/spongepowered/include/com/google/common/collect/ImmutableEntry.d.ts'
export class ImmutableMapEntry<K extends unknown, V extends unknown> extends ImmutableEntry<K, V> {
    constructor(arg0: K, arg1: V)
    getNextInKeyBucket(): ImmutableMapEntry<K, V>;
    getNextInValueBucket(): ImmutableMapEntry<K, V>;
    isReusable(): boolean;
}