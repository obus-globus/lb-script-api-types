import type { AbstractObject2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2IntFunction.d.ts'
import type { Object2IntFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2IntFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2IntFunctions$UnmodifiableFunction<K extends Object | number | string | boolean> extends AbstractObject2IntFunction<K> implements Serializable {
    constructor(arg0: (param0: K) => kotlin.Int)
    // private function: (param0: K) => kotlin.Int;
    clear(): void;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): number;
    getInt(arg0: Object): number;
    getOrDefault(arg0: Object, arg1: number): number;
    hashCode(): number;
    put(arg0: K, arg1: number): number;
    remove(arg0: Object): number;
    removeInt(arg0: Object): number;
    size(): number;
    toString(): string;
}