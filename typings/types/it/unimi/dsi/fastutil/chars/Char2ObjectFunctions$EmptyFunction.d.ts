import type { AbstractChar2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2ObjectFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2ObjectFunctions$EmptyFunction<V extends unknown> extends AbstractChar2ObjectFunction<V> implements Serializable, Cloneable {
    constructor()
    clear(): void;
    clone(): Object;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: string): boolean;
    defaultReturnValue(): V;
    defaultReturnValue(arg0: V): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): V;
    get(arg0: string): V;
    getOrDefault(arg0: Object, arg1: V): V;
    getOrDefault(arg0: string, arg1: V): V;
    hashCode(): number;
    // private readResolve(): Object;
    size(): number;
    toString(): string;
}