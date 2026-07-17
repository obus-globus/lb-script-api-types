import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ObjectProperty } from '../../../../../team/unnamed/mocha/runtime/value/ObjectProperty.d.ts'
import type { Value } from '../../../../../team/unnamed/mocha/runtime/value/Value.d.ts'
export class ObjectPropertyImpl extends Object implements ObjectProperty {
    constructor(arg0: Value, arg1: boolean)
    // private constant: boolean;
    // private value: Value;
    constant(): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    value(): Value;
}