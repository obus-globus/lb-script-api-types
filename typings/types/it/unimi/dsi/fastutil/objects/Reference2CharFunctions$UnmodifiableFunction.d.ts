import type { AbstractReference2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractReference2CharFunction.d.ts'
import type { Reference2CharFunction } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2CharFunctions$UnmodifiableFunction<K extends Object | number | string | boolean> extends AbstractReference2CharFunction<K> implements Serializable {
    constructor(arg0: (param0: K) => kotlin.Char)
    // private function: (param0: K) => kotlin.Char;
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