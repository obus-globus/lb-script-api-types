import type { AbstractDouble2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2ReferenceFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2ReferenceFunctions$Singleton<V extends unknown> extends AbstractDouble2ReferenceFunction<V> implements Serializable, Cloneable {
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