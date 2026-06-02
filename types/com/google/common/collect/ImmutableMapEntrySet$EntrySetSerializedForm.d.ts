import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableMapEntrySet$EntrySetSerializedForm<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Serializable {
    constructor(map: Map<K, V>)
    // private map: Map<K, V>;
    readResolve(): Object;
}