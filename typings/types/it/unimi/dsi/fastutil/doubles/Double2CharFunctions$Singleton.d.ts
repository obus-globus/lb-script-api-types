import type { AbstractDouble2CharFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2CharFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2CharFunctions$Singleton extends AbstractDouble2CharFunction implements Serializable, Cloneable {
    constructor(arg0: number, arg1: string)
    // private key: number;
    // private value: string;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: number): boolean;
    get(arg0: number): string;
    getOrDefault(arg0: number, arg1: string): string;
    size(): number;
}