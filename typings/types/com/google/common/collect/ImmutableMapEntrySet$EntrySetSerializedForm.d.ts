import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableMapEntrySet$EntrySetSerializedForm<K extends unknown, V extends unknown> extends Object implements Serializable {
    constructor(map: JavaMap<K, V>)
    // private map: JavaMap<K, V>;
    readResolve(): Object;
}