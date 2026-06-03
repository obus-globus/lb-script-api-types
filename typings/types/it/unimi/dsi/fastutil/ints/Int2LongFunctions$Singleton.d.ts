import type { AbstractInt2LongFunction } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2LongFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2LongFunctions$Singleton extends AbstractInt2LongFunction implements Serializable, Cloneable {
    constructor(arg0: number, arg1: number)
    // private key: number;
    // private value: number;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    get(arg0: Object): number;
    get(arg0: number): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: number, arg1: number): number;
    size(): number;
}