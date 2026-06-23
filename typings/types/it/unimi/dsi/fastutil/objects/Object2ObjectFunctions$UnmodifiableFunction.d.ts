import type { AbstractObject2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2ObjectFunction.d.ts'
import type { Object2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ObjectFunctions$UnmodifiableFunction<K extends unknown, V extends unknown> extends AbstractObject2ObjectFunction<K, V> implements Serializable {
    constructor(arg0: (param0: Object) => V)
    // private function: (param0: Object) => V;
    clear(): void;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): V;
    defaultReturnValue(arg0: V): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): V;
    getOrDefault(arg0: Object, arg1: V): V;
    hashCode(): number;
    put(arg0: K, arg1: V): V;
    remove(arg0: Object): V;
    size(): number;
    toString(): string;
}