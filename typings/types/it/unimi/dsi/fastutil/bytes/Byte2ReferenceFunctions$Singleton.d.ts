import type { AbstractByte2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2ReferenceFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2ReferenceFunctions$Singleton<V extends Object | number | string | boolean> extends AbstractByte2ReferenceFunction<V> implements Serializable, Cloneable {
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