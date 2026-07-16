import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ConsoleBuiltins$Console extends Enum<ConsoleBuiltins$Console> implements BuiltinEnum<ConsoleBuiltins$Console> {
    static assert_: ConsoleBuiltins$Console;
    static clear: ConsoleBuiltins$Console;
    static count: ConsoleBuiltins$Console;
    static countReset: ConsoleBuiltins$Console;
    static debug: ConsoleBuiltins$Console;
    static dir: ConsoleBuiltins$Console;
    static error: ConsoleBuiltins$Console;
    static group: ConsoleBuiltins$Console;
    static groupCollapsed: ConsoleBuiltins$Console;
    static groupEnd: ConsoleBuiltins$Console;
    static info: ConsoleBuiltins$Console;
    static log: ConsoleBuiltins$Console;
    static time: ConsoleBuiltins$Console;
    static timeEnd: ConsoleBuiltins$Console;
    static timeLog: ConsoleBuiltins$Console;
    static warn: ConsoleBuiltins$Console;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ConsoleBuiltins$Console;
    static values(): ConsoleBuiltins$Console[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): ConsoleBuiltins$Console;
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
    name(): "log" | "info" | "debug" | "dir" | "error" | "warn" | "assert_" | "clear" | "count" | "countReset" | "group" | "groupCollapsed" | "groupEnd" | "time" | "timeEnd" | "timeLog";
}