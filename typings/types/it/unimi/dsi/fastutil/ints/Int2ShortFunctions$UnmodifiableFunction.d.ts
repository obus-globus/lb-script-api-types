import type { AbstractInt2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2ShortFunction.d.ts'
import type { Int2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/ints/Int2ShortFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Int2ShortFunctions$UnmodifiableFunction extends AbstractInt2ShortFunction implements Serializable {
    constructor(arg0: (param0: number) => kotlin.Short)
    // private function: (param0: number) => kotlin.Short;
    clear(): void;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): number;
    get(arg0: number): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: number, arg1: number): number;
    hashCode(): number;
    put(arg0: number, arg1: number): number;
    put(arg0: number, arg1: number): number;
    remove(arg0: Object): number;
    remove(arg0: number): number;
    size(): number;
    toString(): string;
}