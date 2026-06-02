import type { AbstractReference2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractReference2ShortFunction.d.ts'
import type { Reference2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ShortFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ShortFunctions$UnmodifiableFunction<K extends Object | number | string | boolean> extends AbstractReference2ShortFunction<K> implements Serializable {
    constructor(arg0: (param0: K) => kotlin.Short)
    // private function: (param0: K) => kotlin.Short;
    clear(): void;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getShort(arg0: Object): number;
    hashCode(): number;
    put(arg0: K, arg1: number): number;
    put(arg0: K, arg1: number): number;
    remove(arg0: Object): number;
    removeShort(arg0: Object): number;
    size(): number;
    toString(): string;
}