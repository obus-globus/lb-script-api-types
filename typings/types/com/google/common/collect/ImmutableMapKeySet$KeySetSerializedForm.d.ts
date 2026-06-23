import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableMapKeySet$KeySetSerializedForm<K extends unknown> extends Object implements Serializable {
    constructor(map: Map<K, Object | null>)
    // private map: Map<K, Object | null>;
    readResolve(): Object;
}