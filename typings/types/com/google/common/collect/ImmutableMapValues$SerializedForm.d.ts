import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableMapValues$SerializedForm<V extends unknown> extends Object implements Serializable {
    constructor(map: JavaMap<Object | null, V>)
    // private map: JavaMap<Object | null, V>;
    readResolve(): Object;
}