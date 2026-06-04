import type { AbstractReference2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractReference2DoubleFunction.d.ts'
import type { Reference2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2DoubleFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2DoubleFunctions$UnmodifiableFunction<K extends Object | number | string | boolean> extends AbstractReference2DoubleFunction<K> implements Serializable {
    constructor(arg0: (param0: K) => kotlin.Double)
    // private function: (param0: K) => kotlin.Double;
    clear(): void;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): number;
    getDouble(arg0: Object): number;
    getOrDefault(arg0: Object, arg1: number): number;
    hashCode(): number;
    put(arg0: K, arg1: number): number;
    remove(arg0: Object): number;
    removeDouble(arg0: Object): number;
    size(): number;
    toString(): string;
}