import type { AbstractInt2CharFunction } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2CharFunction.d.ts'
import type { Int2CharFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2CharFunctions$UnmodifiableFunction extends AbstractInt2CharFunction implements Serializable {
    constructor(arg0: (param0: number) => kotlin.Char)
    // private function: (param0: number) => kotlin.Char;
    clear(): void;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): string;
    defaultReturnValue(arg0: string): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): string;
    get(arg0: number): string;
    getOrDefault(arg0: Object, arg1: string): string;
    getOrDefault(arg0: number, arg1: string): string;
    hashCode(): number;
    put(arg0: number, arg1: string): string;
    remove(arg0: Object): string;
    remove(arg0: number): string;
    size(): number;
    toString(): string;
}