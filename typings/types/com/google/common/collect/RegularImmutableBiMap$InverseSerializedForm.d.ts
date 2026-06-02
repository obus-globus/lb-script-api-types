import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegularImmutableBiMap$InverseSerializedForm<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Serializable {
    constructor(forward: Map<K, V>)
    // private forward: Map<K, V>;
    readResolve(): Object;
}