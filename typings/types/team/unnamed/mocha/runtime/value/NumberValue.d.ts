import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class NumberValue extends Object implements Value {
    static normalize(paramarg0: number): number;
    static of(paramarg0: number): NumberValue;
    static zero(): NumberValue;
    private constructor(arg0: number)
    // private value: number;
    equals(arg0: Object | null): boolean;
    getAsBoolean(): boolean;
    getAsNumber(): number;
    getAsString(): string;
    hashCode(): number;
    isString(): boolean;
    toString(): string;
    value(): number;
}