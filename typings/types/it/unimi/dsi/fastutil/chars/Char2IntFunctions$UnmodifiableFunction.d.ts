import type { AbstractChar2IntFunction } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2IntFunction.d.ts'
import type { Char2IntFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2IntFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2IntFunctions$UnmodifiableFunction extends AbstractChar2IntFunction implements Serializable {
    constructor(arg0: (param0: string) => kotlin.Int)
    // private function: (param0: string) => kotlin.Int;
    clear(): void;
    containsKey(arg0: string): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): number;
    get(arg0: string): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: string, arg1: number): number;
    hashCode(): number;
    put(arg0: string, arg1: number): number;
    put(arg0: string, arg1: number): number;
    remove(arg0: Object): number;
    remove(arg0: string): number;
    size(): number;
    toString(): string;
}