import type { AbstractObject2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2DoubleFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2DoubleFunctions$Singleton<K extends Object | number | string | boolean> extends AbstractObject2DoubleFunction<K> implements Serializable, Cloneable {
    constructor(arg0: K, arg1: number)
    // private key: K;
    // private value: number;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: Object): boolean;
    getDouble(arg0: Object): number;
    getOrDefault(arg0: Object, arg1: number): number;
    size(): number;
}