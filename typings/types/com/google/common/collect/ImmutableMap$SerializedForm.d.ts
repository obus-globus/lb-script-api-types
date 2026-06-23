import type { ImmutableMap$Builder } from '../../../../com/google/common/collect/ImmutableMap$Builder.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableMap$SerializedForm<K extends unknown, V extends unknown> extends Object implements Serializable {
    constructor(map: Map<K, V>)
    // private keys: Object;
    // private values: Object;
    legacyReadResolve(): Object;
    makeBuilder(size: number): ImmutableMap$Builder<K, V>;
    readResolve(): Object;
}