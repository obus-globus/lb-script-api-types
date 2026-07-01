import type { AbstractShort2CharFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2CharFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2CharFunctions$Singleton extends AbstractShort2CharFunction implements Serializable, Cloneable {
    constructor(arg0: number, arg1: string)
    // private key: number;
    // private value: string;
    clone(): Object;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    get(arg0: Object): string;
    get(arg0: number): string;
    getOrDefault(arg0: Object, arg1: string): string;
    getOrDefault(arg0: number, arg1: string): string;
    size(): number;
}