import type { AbstractReference2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractReference2ObjectFunction.d.ts'
import type { Reference2ObjectFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ObjectFunctions$UnmodifiableFunction<K extends unknown, V extends unknown> extends AbstractReference2ObjectFunction<K, V> implements Serializable {
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