import type { AbstractObject2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2ObjectFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2ObjectFunctions$Singleton<K extends unknown, V extends unknown> extends AbstractObject2ObjectFunction<K, V> implements Serializable, Cloneable {
    constructor(arg0: K, arg1: V)
    // private key: K;
    // private value: V;
    clone(): Object;
    containsKey(arg0: Object): boolean;
    get(arg0: Object): V;
    getOrDefault(arg0: Object, arg1: V): V;
    size(): number;
}