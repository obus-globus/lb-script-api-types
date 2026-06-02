import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class JavaValue extends Object implements Value {
    static nil(): Value;
    static of(paramarg0: boolean): Value;
    static of(paramarg0: number): Value;
    static of(paramarg0: Object): Value;
    static of(paramarg0: string): Value;
    constructor(arg0: Object)
    // private value: Object;
    getAsBoolean(): boolean;
    getAsNumber(): number;
    getAsString(): string;
    isString(): boolean;
    value(): Object;
}