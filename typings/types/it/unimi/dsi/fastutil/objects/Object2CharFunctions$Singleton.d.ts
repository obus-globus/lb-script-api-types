import type { AbstractObject2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2CharFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2CharFunctions$Singleton<K extends unknown> extends AbstractObject2CharFunction<K> implements Serializable, Cloneable {
    constructor(arg0: K, arg1: string)
    // private key: K;
    // private value: string;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: Object): boolean;
    getChar(arg0: Object): string;
    getOrDefault(arg0: Object, arg1: string): string;
    size(): number;
}