import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableMapValues$SerializedForm<V extends Object | number | string | boolean> extends Object implements Serializable {
    constructor(map: Map<Object | null, V>)
    // private map: Map<Object | null, V>;
    readResolve(): Object;
}