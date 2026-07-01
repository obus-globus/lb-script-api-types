import type { AbstractInt2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2ObjectFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2ObjectFunctions$Singleton<V extends unknown> extends AbstractInt2ObjectFunction<V> implements Serializable, Cloneable {
    constructor(arg0: number, arg1: V)
    // private key: number;
    // private value: V;
    clone(): Object;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    get(arg0: Object): V;
    get(arg0: number): V;
    getOrDefault(arg0: Object, arg1: V): V;
    getOrDefault(arg0: number, arg1: V): V;
    size(): number;
}