import type { AbstractByte2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2FloatFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2FloatFunctions$Singleton extends AbstractByte2FloatFunction implements Serializable, Cloneable {
    constructor(arg0: number, arg1: number)
    // private key: number;
    // private value: number;
    clone(): Object;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    get(arg0: Object): number;
    get(arg0: number): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: number, arg1: number): number;
    size(): number;
}