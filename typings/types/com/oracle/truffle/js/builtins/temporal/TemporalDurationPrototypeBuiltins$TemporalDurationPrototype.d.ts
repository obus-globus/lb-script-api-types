import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalDurationPrototypeBuiltins$TemporalDurationPrototype extends Enum<TemporalDurationPrototypeBuiltins$TemporalDurationPrototype> implements BuiltinEnum<TemporalDurationPrototypeBuiltins$TemporalDurationPrototype> {
    static abs: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static add: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static blank: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static days: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static hours: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static microseconds: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static milliseconds: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static minutes: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static months: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static nanoseconds: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static negated: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static round: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static seconds: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static sign: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static subtract: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static toJSON: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static toLocaleString: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static toString: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static total: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static valueOf: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static weeks: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static with: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static years: TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
    static values(): (Object | null)[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): TemporalDurationPrototypeBuiltins$TemporalDurationPrototype;
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
    name(): "years" | "months" | "weeks" | "days" | "hours" | "minutes" | "seconds" | "milliseconds" | "microseconds" | "nanoseconds" | "sign" | "blank" | "with" | "negated" | "abs" | "add" | "subtract" | "round" | "total" | "toJSON" | "toString" | "toLocaleString" | "valueOf";
}