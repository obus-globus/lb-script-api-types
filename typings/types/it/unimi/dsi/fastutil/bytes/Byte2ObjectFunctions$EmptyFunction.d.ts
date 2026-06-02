import type { AbstractByte2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2ObjectFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2ObjectFunctions$EmptyFunction<V extends Object | number | string | boolean> extends AbstractByte2ObjectFunction<V> implements Serializable, Cloneable {
    constructor()
    clear(): void;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): V;
    defaultReturnValue(arg0: V): void;
    equals(arg0: Object | null): boolean;
    get(arg0: number): V;
    getOrDefault(arg0: number, arg1: V): V;
    hashCode(): number;
    // private readResolve(): Object;
    size(): number;
    toString(): string;
}