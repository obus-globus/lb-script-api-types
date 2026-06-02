import type { AbstractObject2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2IntFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2IntFunctions$EmptyFunction<K extends Object | number | string | boolean> extends AbstractObject2IntFunction<K> implements Serializable, Cloneable {
    constructor()
    clear(): void;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    getInt(arg0: Object): number;
    getOrDefault(arg0: Object, arg1: number): number;
    hashCode(): number;
    // private readResolve(): Object;
    size(): number;
    toString(): string;
}