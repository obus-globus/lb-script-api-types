import type { AbstractObject2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2BooleanFunction.d.ts'
import type { Object2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2BooleanFunctions$UnmodifiableFunction<K extends Object | number | string | boolean> extends AbstractObject2BooleanFunction<K> implements Serializable {
    constructor(arg0: (param0: K) => kotlin.Boolean)
    // private function: (param0: K) => kotlin.Boolean;
    clear(): void;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): boolean;
    defaultReturnValue(arg0: boolean): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): boolean;
    getBoolean(arg0: Object): boolean;
    getOrDefault(arg0: Object, arg1: boolean): boolean;
    hashCode(): number;
    put(arg0: K, arg1: boolean): boolean;
    remove(arg0: Object): boolean;
    removeBoolean(arg0: Object): boolean;
    size(): number;
    toString(): string;
}