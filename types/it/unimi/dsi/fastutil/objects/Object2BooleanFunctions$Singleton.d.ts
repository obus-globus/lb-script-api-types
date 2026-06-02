import type { AbstractObject2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2BooleanFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2BooleanFunctions$Singleton<K extends Object | number | string | boolean> extends AbstractObject2BooleanFunction<K> implements Serializable, Cloneable {
    constructor(arg0: K, arg1: boolean)
    // private key: K;
    // private value: boolean;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: Object): boolean;
    getBoolean(arg0: Object): boolean;
    getOrDefault(arg0: Object, arg1: boolean): boolean;
    size(): number;
}