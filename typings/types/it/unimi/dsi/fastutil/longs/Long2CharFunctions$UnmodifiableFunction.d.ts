import type { AbstractLong2CharFunction } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2CharFunction.d.ts'
import type { Long2CharFunction } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Long2CharFunctions$UnmodifiableFunction extends AbstractLong2CharFunction implements Serializable {
    constructor(arg0: (param0: number) => string)
    // private function: (param0: number) => string;
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