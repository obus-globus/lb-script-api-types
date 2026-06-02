import type { JSTemporalPlainDateObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateObject.d.ts'
import type { JSTemporalZonedDateTimeObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalZonedDateTimeObject.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToRelativeTemporalObjectNode$Result extends Record {
    constructor(plainRelativeTo: JSTemporalPlainDateObject, zonedRelativeTo: JSTemporalZonedDateTimeObject)
    // private plainRelativeTo: JSTemporalPlainDateObject;
    // private zonedRelativeTo: JSTemporalZonedDateTimeObject;
    equals(o: Object | null): boolean;
    hashCode(): number;
    plainRelativeTo(): JSTemporalPlainDateObject;
    toString(): string;
    zonedRelativeTo(): JSTemporalZonedDateTimeObject;
}