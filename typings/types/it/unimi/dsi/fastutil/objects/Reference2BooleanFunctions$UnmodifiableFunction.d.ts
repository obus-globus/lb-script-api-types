import type { AbstractReference2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractReference2BooleanFunction.d.ts'
import type { Reference2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2BooleanFunctions$UnmodifiableFunction<K extends unknown> extends AbstractReference2BooleanFunction<K> implements Serializable {
    constructor(arg0: (param0: Object) => boolean)
    // private function: (param0: Object) => boolean;
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