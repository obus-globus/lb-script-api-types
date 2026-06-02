import type { AbstractChar2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2BooleanFunction.d.ts'
import type { Char2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/chars/Char2BooleanFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Char2BooleanFunctions$UnmodifiableFunction extends AbstractChar2BooleanFunction implements Serializable {
    constructor(arg0: (param0: string) => kotlin.Boolean)
    // private function: (param0: string) => kotlin.Boolean;
    clear(): void;
    containsKey(arg0: string): boolean;
    defaultReturnValue(): boolean;
    defaultReturnValue(arg0: boolean): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): boolean;
    get(arg0: string): boolean;
    getOrDefault(arg0: Object, arg1: boolean): boolean;
    getOrDefault(arg0: string, arg1: boolean): boolean;
    hashCode(): number;
    put(arg0: string, arg1: boolean): boolean;
    put(arg0: string, arg1: boolean): boolean;
    remove(arg0: Object): boolean;
    remove(arg0: string): boolean;
    size(): number;
    toString(): string;
}