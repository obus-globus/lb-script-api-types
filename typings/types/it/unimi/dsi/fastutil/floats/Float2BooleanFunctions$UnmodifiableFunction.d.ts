import type { AbstractFloat2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2BooleanFunction.d.ts'
import type { Float2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/floats/Float2BooleanFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Float2BooleanFunctions$UnmodifiableFunction extends AbstractFloat2BooleanFunction implements Serializable {
    constructor(arg0: (param0: number) => kotlin.Boolean)
    // private function: (param0: number) => kotlin.Boolean;
    clear(): void;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): boolean;
    defaultReturnValue(arg0: boolean): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): boolean;
    get(arg0: number): boolean;
    getOrDefault(arg0: Object, arg1: boolean): boolean;
    getOrDefault(arg0: number, arg1: boolean): boolean;
    hashCode(): number;
    put(arg0: number, arg1: boolean): boolean;
    put(arg0: number, arg1: boolean): boolean;
    remove(arg0: Object): boolean;
    remove(arg0: number): boolean;
    size(): number;
    toString(): string;
}