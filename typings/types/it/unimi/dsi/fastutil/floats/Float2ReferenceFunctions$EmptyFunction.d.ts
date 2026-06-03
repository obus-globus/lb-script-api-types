import type { AbstractFloat2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2ReferenceFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2ReferenceFunctions$EmptyFunction<V extends Object | number | string | boolean> extends AbstractFloat2ReferenceFunction<V> implements Serializable, Cloneable {
    constructor()
    clear(): void;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): V;
    defaultReturnValue(arg0: V): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): V;
    get(arg0: number): V;
    getOrDefault(arg0: Object, arg1: V): V;
    getOrDefault(arg0: number, arg1: V): V;
    hashCode(): number;
    // private readResolve(): Object;
    size(): number;
    toString(): string;
}