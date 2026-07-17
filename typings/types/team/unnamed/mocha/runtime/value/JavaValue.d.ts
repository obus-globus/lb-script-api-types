import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class JavaValue extends Object implements Value {
    constructor(arg0: Object)
    // private value: Object;
    getAsBoolean(): boolean;
    getAsNumber(): number;
    getAsString(): string;
    isString(): boolean;
    value(): Object;
}