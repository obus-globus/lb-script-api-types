import type { AbstractReference2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractReference2FloatFunction.d.ts'
import type { Reference2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2FloatFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2FloatFunctions$UnmodifiableFunction<K extends Object | number | string | boolean> extends AbstractReference2FloatFunction<K> implements Serializable {
    constructor(arg0: (param0: K) => kotlin.Float)
    // private function: (param0: K) => kotlin.Float;
    clear(): void;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): number;
    getFloat(arg0: Object): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: Object, arg1: number): number;
    hashCode(): number;
    put(arg0: K, arg1: number): number;
    put(arg0: K, arg1: number): number;
    remove(arg0: Object): number;
    removeFloat(arg0: Object): number;
    size(): number;
    toString(): string;
}