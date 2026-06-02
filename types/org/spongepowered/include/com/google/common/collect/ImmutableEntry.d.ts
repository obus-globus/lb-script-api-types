import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AbstractMapEntry } from '../../../../../../../org/spongepowered/include/com/google/common/collect/AbstractMapEntry.d.ts'
export class ImmutableEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractMapEntry<K, V> implements Serializable {
    constructor(arg0: K, arg1: V)
    readonly key: K;
    readonly key: K;
    readonly value: V;
    readonly value: V;
    setValue(arg0: V): V;
}