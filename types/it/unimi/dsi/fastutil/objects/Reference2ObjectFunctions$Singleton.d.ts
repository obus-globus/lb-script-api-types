import type { AbstractReference2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractReference2ObjectFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Reference2ObjectFunctions$Singleton<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractReference2ObjectFunction<K, V> implements Serializable, Cloneable {
    constructor(arg0: K, arg1: V)
    // private key: K;
    // private value: V;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: Object): boolean;
    get(arg0: Object): V;
    getOrDefault(arg0: Object, arg1: V): V;
    size(): number;
}