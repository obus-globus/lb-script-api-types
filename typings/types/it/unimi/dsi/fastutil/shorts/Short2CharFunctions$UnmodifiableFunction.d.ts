import type { AbstractShort2CharFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2CharFunction.d.ts'
import type { Short2CharFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2CharFunctions$UnmodifiableFunction extends AbstractShort2CharFunction implements Serializable {
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
    put(arg0: number, arg1: string): string;
    remove(arg0: Object): string;
    remove(arg0: number): string;
    size(): number;
    toString(): string;
}