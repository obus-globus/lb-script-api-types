import type { AbstractReference2LongFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractReference2LongFunction.d.ts'
import type { Reference2LongFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2LongFunctions$UnmodifiableFunction<K extends Object | number | string | boolean> extends AbstractReference2LongFunction<K> implements Serializable {
    constructor(arg0: (param0: K) => kotlin.Long)
    // private function: (param0: K) => kotlin.Long;
    clear(): void;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): number;
    getLong(arg0: Object): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: Object, arg1: number): number;
    hashCode(): number;
    put(arg0: K, arg1: number): number;
    put(arg0: K, arg1: number): number;
    remove(arg0: Object): number;
    removeLong(arg0: Object): number;
    size(): number;
    toString(): string;
}