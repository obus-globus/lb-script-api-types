import type { AbstractDouble2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2BooleanFunction.d.ts'
import type { Double2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2BooleanFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Double2BooleanFunctions$UnmodifiableFunction extends AbstractDouble2BooleanFunction implements Serializable {
    constructor(arg0: (param0: number) => kotlin.Boolean)
    // private function: (param0: number) => kotlin.Boolean;
    clear(): void;
    containsKey(arg0: Object): boolean;
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