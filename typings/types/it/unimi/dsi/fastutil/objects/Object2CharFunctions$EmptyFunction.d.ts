import type { AbstractObject2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2CharFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2CharFunctions$EmptyFunction<K extends Object | number | string | boolean> extends AbstractObject2CharFunction<K> implements Serializable, Cloneable {
    constructor()
    clear(): void;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): string;
    defaultReturnValue(arg0: string): void;
    equals(arg0: Object | null): boolean;
    getChar(arg0: Object): string;
    getOrDefault(arg0: Object, arg1: string): string;
    getOrDefault(arg0: Object, arg1: string): string;
    hashCode(): number;
    // private readResolve(): Object;
    size(): number;
    toString(): string;
}