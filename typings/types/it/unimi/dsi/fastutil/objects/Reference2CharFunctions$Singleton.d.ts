import type { AbstractReference2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractReference2CharFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Reference2CharFunctions$Singleton<K extends unknown> extends AbstractReference2CharFunction<K> implements Serializable, Cloneable {
    constructor(arg0: K, arg1: string)
    // private key: K;
    // private value: string;
    clone(): Object;
    containsKey(arg0: Object): boolean;
    getChar(arg0: Object): string;
    getOrDefault(arg0: Object, arg1: string): string;
    size(): number;
}