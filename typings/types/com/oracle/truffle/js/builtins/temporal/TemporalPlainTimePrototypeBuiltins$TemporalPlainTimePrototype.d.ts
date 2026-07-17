import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype extends Enum<TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype> implements BuiltinEnum<TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype> {
    static add: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static calendar: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static equals: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static hour: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static microsecond: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static millisecond: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static minute: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static nanosecond: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static round: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static second: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static since: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static subtract: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static toJSON: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static toLocaleString: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static toString: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static until: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static valueOf: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static with: TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
    static values(): TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): TemporalPlainTimePrototypeBuiltins$TemporalPlainTimePrototype;
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
    name(): "calendar" | "hour" | "minute" | "second" | "millisecond" | "microsecond" | "nanosecond" | "add" | "subtract" | "with" | "until" | "since" | "round" | "equals" | "toString" | "toLocaleString" | "toJSON" | "valueOf";
}