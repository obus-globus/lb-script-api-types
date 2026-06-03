import type { AbstractChar2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2FloatFunction.d.ts'
import type { Char2FloatFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2FloatFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2FloatFunctions$UnmodifiableFunction extends AbstractChar2FloatFunction implements Serializable {
    constructor(arg0: (param0: string) => kotlin.Float)
    // private function: (param0: string) => kotlin.Float;
    clear(): void;
    containsKey(arg0: Object): boolean;
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