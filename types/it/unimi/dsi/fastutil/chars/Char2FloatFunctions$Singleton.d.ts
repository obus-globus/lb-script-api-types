import type { AbstractChar2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2FloatFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2FloatFunctions$Singleton extends AbstractChar2FloatFunction implements Serializable, Cloneable {
    constructor(arg0: string, arg1: number)
    // private key: string;
    // private value: number;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: string): boolean;
    get(arg0: string): number;
    getOrDefault(arg0: string, arg1: number): number;
    size(): number;
}