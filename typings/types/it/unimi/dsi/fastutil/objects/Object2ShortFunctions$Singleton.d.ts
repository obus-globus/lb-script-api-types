import type { AbstractObject2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2ShortFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2ShortFunctions$Singleton<K extends unknown> extends AbstractObject2ShortFunction<K> implements Serializable, Cloneable {
    constructor(arg0: K, arg1: number)
    // private key: K;
    // private value: number;
    clone(): Object;
    containsKey(arg0: Object): boolean;
    getOrDefault(arg0: Object, arg1: number): number;
    getShort(arg0: Object): number;
    size(): number;
}