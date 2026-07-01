import type { AbstractObject2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2FloatFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2FloatFunctions$EmptyFunction<K extends unknown> extends AbstractObject2FloatFunction<K> implements Serializable, Cloneable {
    constructor()
    clear(): void;
    clone(): Object;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    getFloat(arg0: Object): number;
    getOrDefault(arg0: Object, arg1: number): number;
    hashCode(): number;
    // private readResolve(): Object;
    size(): number;
    toString(): string;
}