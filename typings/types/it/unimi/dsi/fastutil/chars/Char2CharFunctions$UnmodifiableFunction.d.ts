import type { AbstractChar2CharFunction } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2CharFunction.d.ts'
import type { Char2CharFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2CharFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2CharFunctions$UnmodifiableFunction extends AbstractChar2CharFunction implements Serializable {
    constructor(arg0: (param0: string) => kotlin.Char)
    // private function: (param0: string) => kotlin.Char;
    clear(): void;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: string): boolean;
    defaultReturnValue(): string;
    defaultReturnValue(arg0: string): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): string;
    get(arg0: string): string;
    getOrDefault(arg0: Object, arg1: string): string;
    getOrDefault(arg0: string, arg1: string): string;
    hashCode(): number;
    put(arg0: string, arg1: string): string;
    remove(arg0: Object): string;
    remove(arg0: string): string;
    size(): number;
    toString(): string;
}