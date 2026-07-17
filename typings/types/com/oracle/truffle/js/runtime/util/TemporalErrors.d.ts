import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSException } from '../../../../../../com/oracle/truffle/js/runtime/JSException.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TemporalErrors extends Object {
    static createRangeErrorCalendarNotSupported(): JSException;
    static createRangeErrorCalendarUnknown(): JSException;
    static createRangeErrorDateOutsideRange(): JSException;
    static createRangeErrorDateTimeOutsideRange(): JSException;
    static createRangeErrorDisallowedUnit(paramoriginatingNode: Node, paramunit: TemporalUtil$Unit): JSException;
    static createRangeErrorIdenticalCalendarExpected(): JSException;
    static createRangeErrorIdenticalTimeZoneExpected(): JSException;
    static createRangeErrorInvalidMonthCode(parammonthCode: Object): JSException;
    static createRangeErrorInvalidNanoseconds(): JSException;
    static createRangeErrorInvalidPlainDateTime(): JSException;
    static createRangeErrorInvalidRelativeToString(): JSException;
    static createRangeErrorInvalidTimeZoneString(): JSException;
    static createRangeErrorMonthDayOutsideRange(): JSException;
    static createRangeErrorNotADateTimeUnit(paramoriginatingNode: Node, paramunit: TemporalUtil$Unit): JSException;
    static createRangeErrorNotADateUnit(paramoriginatingNode: Node, paramunit: TemporalUtil$Unit): JSException;
    static createRangeErrorNotATimeUnit(paramoriginatingNode: Node, paramunit: TemporalUtil$Unit): JSException;
    static createRangeErrorNumberIsNaN(): JSException;
    static createRangeErrorOptionsNotContained(paramvalues: Object[], paramvalue: Object): JSException;
    static createRangeErrorRelativeToNotUndefined(): JSException;
    static createRangeErrorRelativeToNotUndefined(paramunit: TemporalUtil$Unit): JSException;
    static createRangeErrorSmallestUnitOutOfRange(): JSException;
    static createRangeErrorTemporalISO8601Expected(): JSException;
    static createRangeErrorTemporalMalformedDuration(): JSException;
    static createRangeErrorTimeOutsideRange(): JSException;
    static createRangeErrorTimeZoneOffsetExpected(): JSException;
    static createRangeErrorUnitValueUndefinedOrNotAllowed(paramproperty: TruffleString, paramvalue: TruffleString, paramallowedUnits: Map<TruffleString, TemporalUtil$Unit>): JSException;
    static createRangeErrorYearMonthOutsideRange(): JSException;
    static createTypeErrorDurationOutsideRange(): JSException;
    static createTypeErrorFieldsNotAnObject(): JSException;
    static createTypeErrorObjectExpected(): JSException;
    static createTypeErrorOptions(): JSException;
    static createTypeErrorOptionsUndefined(): JSException;
    static createTypeErrorPartialTemporalObjectExpected(): JSException;
    static createTypeErrorPropertyRequired(paramproperty: TruffleString): JSException;
    static createTypeErrorTemporalCalendarExpected(): JSException;
    static createTypeErrorTemporalDurationExpected(): JSException;
    static createTypeErrorTemporalInstantExpected(): JSException;
    static createTypeErrorTemporalPlainDateExpected(): JSException;
    static createTypeErrorTemporalPlainDateTimeExpected(): JSException;
    static createTypeErrorTemporalPlainMonthDayExpected(): JSException;
    static createTypeErrorTemporalPlainTimeExpected(): JSException;
    static createTypeErrorTemporalPlainYearMonthExpected(): JSException;
    static createTypeErrorTemporalTimePropertyExpected(): JSException;
    static createTypeErrorTemporalZonedDateTimeExpected(): JSException;
    static createTypeErrorUnexpectedCalendar(): JSException;
    static createTypeErrorUnexpectedTimeZone(): JSException;
    private constructor()
}