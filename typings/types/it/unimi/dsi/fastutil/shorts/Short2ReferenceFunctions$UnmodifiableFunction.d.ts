import type { AbstractShort2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2ReferenceFunction.d.ts'
import type { Short2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2ReferenceFunctions$UnmodifiableFunction<V extends Object | number | string | boolean> extends AbstractShort2ReferenceFunction<V> implements Serializable {
    constructor(arg0: (param0: V) => unknown)
    // private function: (param0: V) => unknown;
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
    put(arg0: number, arg1: V): V;
    remove(arg0: Object): V;
    remove(arg0: number): V;
    size(): number;
    toString(): string;
}