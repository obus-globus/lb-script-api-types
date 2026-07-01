import type { AbstractObject2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2BooleanFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2BooleanFunctions$EmptyFunction<K extends unknown> extends AbstractObject2BooleanFunction<K> implements Serializable, Cloneable {
    constructor()
    clear(): void;
    clone(): Object;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): boolean;
    defaultReturnValue(arg0: boolean): void;
    equals(arg0: Object | null): boolean;
    getBoolean(arg0: Object): boolean;
    getOrDefault(arg0: Object, arg1: boolean): boolean;
    hashCode(): number;
    // private readResolve(): Object;
    size(): number;
    toString(): string;
}