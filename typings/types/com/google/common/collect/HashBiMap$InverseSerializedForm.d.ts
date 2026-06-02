import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HashBiMap$InverseSerializedForm<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Serializable {
    constructor(bimap: Map<K, V>)
    // private bimap: Map<K, V>;
    readResolve(): Object;
}