import type { AbstractLong2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2ReferenceFunction.d.ts'
import type { Long2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2ReferenceFunctions$UnmodifiableFunction<V extends unknown> extends AbstractLong2ReferenceFunction<V> implements Serializable {
    constructor(arg0: (param0: number) => V)
    // private function: (param0: number) => V;
    clear(): void;
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
    put(arg0: number, arg1: V): V;
    remove(arg0: Object): V;
    remove(arg0: number): V;
    size(): number;
    toString(): string;
}