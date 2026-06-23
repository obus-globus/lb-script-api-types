import type { AbstractObject2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2FloatFunction.d.ts'
import type { Object2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2FloatFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2FloatFunctions$UnmodifiableFunction<K extends unknown> extends AbstractObject2FloatFunction<K> implements Serializable {
    constructor(arg0: (param0: Object) => number)
    // private function: (param0: Object) => number;
    clear(): void;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): number;
    getFloat(arg0: Object): number;
    getOrDefault(arg0: Object, arg1: number): number;
    hashCode(): number;
    put(arg0: K, arg1: number): number;
    remove(arg0: Object): number;
    removeFloat(arg0: Object): number;
    size(): number;
    toString(): string;
}