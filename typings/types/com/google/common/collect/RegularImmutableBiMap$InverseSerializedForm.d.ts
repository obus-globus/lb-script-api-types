import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegularImmutableBiMap$InverseSerializedForm<K extends unknown, V extends unknown> extends Object implements Serializable {
    constructor(forward: Map<K, V>)
    // private forward: Map<K, V>;
    readResolve(): Object;
}