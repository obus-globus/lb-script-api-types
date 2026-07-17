import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class ArrayValue extends Object implements Value {
    static of(...paramarg0: Value[]): ArrayValue;
    private constructor(...arg0: Value[])
    // private values: Value[];
    equals(arg0: Object | null): boolean;
    get(arg0: Value): Value;
    getAsBoolean(): boolean;
    getAsNumber(): number;
    getAsString(): string;
    hashCode(): number;
    isString(): boolean;
    toString(): string;
    values(): Value[];
}