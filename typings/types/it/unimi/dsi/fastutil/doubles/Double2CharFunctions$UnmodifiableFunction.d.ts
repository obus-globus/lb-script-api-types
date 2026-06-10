import type { AbstractDouble2CharFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2CharFunction.d.ts'
import type { Double2CharFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2CharFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2CharFunctions$UnmodifiableFunction extends AbstractDouble2CharFunction implements Serializable {
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