import type { AbstractObject2LongFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2LongFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2LongFunctions$Singleton<K extends unknown> extends AbstractObject2LongFunction<K> implements Serializable, Cloneable {
    constructor(arg0: K, arg1: number)
    // private key: K;
    // private value: number;
    clone(): Object;
    containsKey(arg0: Object): boolean;
    getLong(arg0: Object): number;
    getOrDefault(arg0: Object, arg1: number): number;
    size(): number;
}