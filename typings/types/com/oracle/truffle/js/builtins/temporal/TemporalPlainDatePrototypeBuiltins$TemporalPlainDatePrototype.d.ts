import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype extends Enum<TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype> implements BuiltinEnum<TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype> {
    static add: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static calendarId: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static day: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static dayOfWeek: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static dayOfYear: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static daysInMonth: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static daysInWeek: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static daysInYear: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static equals: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static era: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static eraYear: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static inLeapYear: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static month: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static monthCode: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static monthsInYear: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static since: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static subtract: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static toJSON: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static toLocaleString: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static toPlainDateTime: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static toPlainMonthDay: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static toPlainYearMonth: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static toString: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static toZonedDateTime: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static until: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static valueOf: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static weekOfYear: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static with: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static withCalendar: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static year: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static yearOfWeek: TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TemporalPlainDatePrototypeBuiltins$TemporalPlainDatePrototype;
    static values(): (Object | null)[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum<E extends Enum<BuiltinEnum<E>>>(): E;
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
    isGetter(): boolean;
    isNewTargetConstructor(): boolean;
    isOptional(): boolean;
    isSetter(): boolean;
    isWritable(): boolean;
    prependAccessorPrefix(name: TruffleString): TruffleString;
    name(): "calendarId" | "era" | "eraYear" | "year" | "month" | "monthCode" | "day" | "dayOfYear" | "dayOfWeek" | "weekOfYear" | "yearOfWeek" | "daysInWeek" | "daysInMonth" | "daysInYear" | "monthsInYear" | "inLeapYear" | "toPlainYearMonth" | "toPlainMonthDay" | "add" | "subtract" | "with" | "withCalendar" | "until" | "since" | "equals" | "toPlainDateTime" | "toZonedDateTime" | "toString" | "toLocaleString" | "toJSON" | "valueOf";
}