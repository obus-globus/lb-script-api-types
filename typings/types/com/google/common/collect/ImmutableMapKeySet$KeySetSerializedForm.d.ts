import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableMapKeySet$KeySetSerializedForm<K extends unknown> extends Object implements Serializable {
    constructor(map: JavaMap<K, Object | null>)
    // private map: JavaMap<K, Object | null>;
    readResolve(): Object;
}