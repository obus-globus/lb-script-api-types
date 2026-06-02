import type { AbstractFloat2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2ObjectFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2ObjectFunctions$Singleton<V extends Object | number | string | boolean> extends AbstractFloat2ObjectFunction<V> implements Serializable, Cloneable {
    constructor(arg0: number, arg1: V)
    // private key: number;
    // private value: V;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: number): boolean;
    get(arg0: number): V;
    getOrDefault(arg0: number, arg1: V): V;
    size(): number;
}