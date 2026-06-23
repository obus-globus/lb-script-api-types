import type { AbstractReference2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractReference2ReferenceFunction.d.ts'
import type { Reference2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ReferenceFunctions$UnmodifiableFunction<K extends unknown, V extends unknown> extends AbstractReference2ReferenceFunction<K, V> implements Serializable {
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