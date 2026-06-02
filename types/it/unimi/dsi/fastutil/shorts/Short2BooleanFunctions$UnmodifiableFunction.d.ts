import type { AbstractShort2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2BooleanFunction.d.ts'
import type { Short2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Short2BooleanFunctions$UnmodifiableFunction extends AbstractShort2BooleanFunction implements Serializable {
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