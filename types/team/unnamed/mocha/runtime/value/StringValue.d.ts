import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class StringValue extends Object implements Value {
    static nil(): Value;
    static of(paramarg0: string): StringValue;
    static of(paramarg0: boolean): Value;
    static of(paramarg0: number): Value;
    static of(paramarg0: Object): Value;
    static of(paramarg0: string): Value;
    private constructor(arg0: string)
    // private value: string;
    equals(arg0: Object | null): boolean;
    getAsBoolean(): boolean;
    getAsNumber(): number;
    getAsString(): string;
    hashCode(): number;
    isString(): boolean;
    toString(): string;
    value(): string;
}