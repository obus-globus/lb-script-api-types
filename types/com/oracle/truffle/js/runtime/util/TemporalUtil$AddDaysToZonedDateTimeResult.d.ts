import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSTemporalInstantObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalInstantObject.d.ts'
import type { JSTemporalPlainDateTimeObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateTimeObject.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TemporalUtil$AddDaysToZonedDateTimeResult extends Record {
    constructor(epochNanoseconds: BigInt, instant: JSTemporalInstantObject, dateTime: JSTemporalPlainDateTimeObject)
    // private dateTime: JSTemporalPlainDateTimeObject;
    // private epochNanoseconds: BigInt;
    // private instant: JSTemporalInstantObject;
    dateTime(): JSTemporalPlainDateTimeObject;
    epochNanoseconds(): BigInt;
    equals(o: Object | null): boolean;
    hashCode(): number;
    instant(): JSTemporalInstantObject;
    toString(): string;
}