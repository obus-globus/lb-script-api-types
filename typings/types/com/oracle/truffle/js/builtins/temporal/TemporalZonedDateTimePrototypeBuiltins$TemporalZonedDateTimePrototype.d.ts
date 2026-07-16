import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype extends Enum<TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype> implements BuiltinEnum<TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype> {
    static add: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static calendarId: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static day: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static dayOfWeek: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static dayOfYear: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static daysInMonth: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static daysInWeek: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static daysInYear: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static epochMilliseconds: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static epochNanoseconds: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static equals: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static era: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static eraYear: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static getTimeZoneTransition: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static hour: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static hoursInDay: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static inLeapYear: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static microsecond: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static millisecond: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static minute: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static month: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static monthCode: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static monthsInYear: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static nanosecond: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static offset: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static offsetNanoseconds: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static round: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static second: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static since: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static startOfDay: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static subtract: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static timeZoneId: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static toInstant: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static toJSON: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static toLocaleString: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static toPlainDate: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static toPlainDateTime: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static toPlainTime: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static toString: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static until: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static valueOf: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static weekOfYear: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static with: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static withCalendar: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static withPlainTime: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static withTimeZone: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static year: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static yearOfWeek: TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    static values(): TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): TemporalZonedDateTimePrototypeBuiltins$TemporalZonedDateTimePrototype;
    createNode(context: JSContext, builtin: JSBuiltin, construct: boolean, newTarget: boolean): Object;
    getECMAScriptVersion(): number;
    getKey(): Object;
    getLength(): number;
    getName(): TruffleString;
    isAOTSupported(): boolean;
    isAnnexB(): boolean;
    isConfigurable(): boolean;
    isConstructor(): boolean;
    isEnabled(): boolean;
    isEnumerable(): boolean;
    isGetter(): boolean;
    isNewTargetConstructor(): boolean;
    isOptional(): boolean;
    isSetter(): boolean;
    isWritable(): boolean;
    prependAccessorPrefix(name: TruffleString): TruffleString;
    name(): "calendarId" | "timeZoneId" | "era" | "eraYear" | "year" | "month" | "monthCode" | "day" | "hour" | "minute" | "second" | "millisecond" | "microsecond" | "nanosecond" | "epochMilliseconds" | "epochNanoseconds" | "dayOfWeek" | "dayOfYear" | "weekOfYear" | "yearOfWeek" | "hoursInDay" | "daysInWeek" | "daysInMonth" | "daysInYear" | "monthsInYear" | "inLeapYear" | "offsetNanoseconds" | "offset" | "with" | "withPlainTime" | "withTimeZone" | "withCalendar" | "add" | "subtract" | "until" | "since" | "round" | "equals" | "toString" | "toLocaleString" | "toJSON" | "valueOf" | "startOfDay" | "getTimeZoneTransition" | "toInstant" | "toPlainDate" | "toPlainTime" | "toPlainDateTime";
}