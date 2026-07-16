import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype extends Enum<TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype> implements BuiltinEnum<TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype> {
    static add: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static calendarId: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static daysInMonth: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static daysInYear: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static equals: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static era: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static eraYear: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static inLeapYear: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static month: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static monthCode: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static monthsInYear: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static since: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static subtract: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static toJSON: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static toLocaleString: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static toPlainDate: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static toString: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static until: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static valueOf: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static with: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static year: TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
    static values(): TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): TemporalPlainYearMonthPrototypeBuiltins$TemporalPlainYearMonthPrototype;
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
    name(): "calendarId" | "era" | "eraYear" | "year" | "month" | "monthCode" | "daysInMonth" | "daysInYear" | "monthsInYear" | "inLeapYear" | "with" | "add" | "subtract" | "until" | "since" | "equals" | "toString" | "toLocaleString" | "toJSON" | "valueOf" | "toPlainDate";
}