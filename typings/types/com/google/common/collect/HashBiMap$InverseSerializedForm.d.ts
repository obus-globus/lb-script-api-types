import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HashBiMap$InverseSerializedForm<K extends unknown, V extends unknown> extends Object implements Serializable {
    constructor(bimap: JavaMap<K, V>)
    // private bimap: JavaMap<K, V>;
    readResolve(): Object;
}