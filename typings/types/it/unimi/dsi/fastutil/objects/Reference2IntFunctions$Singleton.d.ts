import type { AbstractReference2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractReference2IntFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Reference2IntFunctions$Singleton<K extends unknown> extends AbstractReference2IntFunction<K> implements Serializable, Cloneable {
    constructor(arg0: K, arg1: number)
    // private key: K;
    // private value: number;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: Object): boolean;
    getInt(arg0: Object): number;
    getOrDefault(arg0: Object, arg1: number): number;
    size(): number;
}