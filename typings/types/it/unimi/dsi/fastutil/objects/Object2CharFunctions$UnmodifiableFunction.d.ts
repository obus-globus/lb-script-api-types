import type { AbstractObject2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2CharFunction.d.ts'
import type { Object2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2CharFunctions$UnmodifiableFunction<K extends unknown> extends AbstractObject2CharFunction<K> implements Serializable {
    constructor(arg0: (param0: Object) => string)
    // private function: (param0: Object) => string;
    clear(): void;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): string;
    defaultReturnValue(arg0: string): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): string;
    getChar(arg0: Object): string;
    getOrDefault(arg0: Object, arg1: string): string;
    hashCode(): number;
    put(arg0: K, arg1: string): string;
    remove(arg0: Object): string;
    removeChar(arg0: Object): string;
    size(): number;
    toString(): string;
}