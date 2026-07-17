import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype extends Enum<TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype> implements BuiltinEnum<TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype> {
    static add: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static calendarId: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static day: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static dayOfWeek: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static dayOfYear: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static daysInMonth: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static daysInWeek: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static daysInYear: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static equals: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static era: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static eraYear: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static hour: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static inLeapYear: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static microsecond: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static millisecond: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static minute: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static month: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static monthCode: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static monthsInYear: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static nanosecond: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static round: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static second: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static since: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static subtract: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static toJSON: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static toLocaleString: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static toPlainDate: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static toPlainTime: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static toString: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static toZonedDateTime: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static until: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static valueOf: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static weekOfYear: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static with: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static withCalendar: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static withPlainTime: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static year: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static yearOfWeek: TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
    static values(): TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): TemporalPlainDateTimePrototypeBuiltins$TemporalPlainDateTimePrototype;
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
    name(): "calendarId" | "era" | "eraYear" | "year" | "month" | "monthCode" | "day" | "dayOfYear" | "dayOfWeek" | "weekOfYear" | "yearOfWeek" | "daysInWeek" | "daysInMonth" | "daysInYear" | "monthsInYear" | "inLeapYear" | "hour" | "minute" | "second" | "millisecond" | "microsecond" | "nanosecond" | "with" | "withPlainTime" | "withCalendar" | "add" | "subtract" | "until" | "since" | "round" | "equals" | "toString" | "toLocaleString" | "toJSON" | "valueOf" | "toPlainDate" | "toPlainTime" | "toZonedDateTime";
}