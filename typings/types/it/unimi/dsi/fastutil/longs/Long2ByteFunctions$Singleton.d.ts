import type { AbstractLong2ByteFunction } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2ByteFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2ByteFunctions$Singleton extends AbstractLong2ByteFunction implements Serializable, Cloneable {
    constructor(arg0: number, arg1: number)
    // private key: number;
    // private value: number;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: number): boolean;
    get(arg0: number): number;
    getOrDefault(arg0: number, arg1: number): number;
    size(): number;
}