import type { AbstractChar2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2BooleanFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2BooleanFunctions$Singleton extends AbstractChar2BooleanFunction implements Serializable, Cloneable {
    constructor(arg0: string, arg1: boolean)
    // private key: string;
    // private value: boolean;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: string): boolean;
    get(arg0: string): boolean;
    getOrDefault(arg0: string, arg1: boolean): boolean;
    size(): number;
}