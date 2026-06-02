import type { AbstractChar2CharFunction } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2CharFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2CharFunctions$Singleton extends AbstractChar2CharFunction implements Serializable, Cloneable {
    constructor(arg0: string, arg1: string)
    // private key: string;
    // private value: string;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: string): boolean;
    get(arg0: string): string;
    getOrDefault(arg0: string, arg1: string): string;
    size(): number;
}