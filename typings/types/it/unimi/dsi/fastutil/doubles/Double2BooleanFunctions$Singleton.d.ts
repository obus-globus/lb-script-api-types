import type { AbstractDouble2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2BooleanFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2BooleanFunctions$Singleton extends AbstractDouble2BooleanFunction implements Serializable, Cloneable {
    constructor(arg0: number, arg1: boolean)
    // private key: number;
    // private value: boolean;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    get(arg0: Object): boolean;
    get(arg0: number): boolean;
    getOrDefault(arg0: Object, arg1: boolean): boolean;
    getOrDefault(arg0: number, arg1: boolean): boolean;
    size(): number;
}