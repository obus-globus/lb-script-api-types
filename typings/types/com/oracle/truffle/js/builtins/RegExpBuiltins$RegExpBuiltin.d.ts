import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class RegExpBuiltins$RegExpBuiltin extends Enum<RegExpBuiltins$RegExpBuiltin> implements BuiltinEnum<RegExpBuiltins$RegExpBuiltin> {
    static $1: RegExpBuiltins$RegExpBuiltin;
    static $2: RegExpBuiltins$RegExpBuiltin;
    static $3: RegExpBuiltins$RegExpBuiltin;
    static $4: RegExpBuiltins$RegExpBuiltin;
    static $5: RegExpBuiltins$RegExpBuiltin;
    static $6: RegExpBuiltins$RegExpBuiltin;
    static $7: RegExpBuiltins$RegExpBuiltin;
    static $8: RegExpBuiltins$RegExpBuiltin;
    static $9: RegExpBuiltins$RegExpBuiltin;
    static input: RegExpBuiltins$RegExpBuiltin;
    static lastMatch: RegExpBuiltins$RegExpBuiltin;
    static lastParen: RegExpBuiltins$RegExpBuiltin;
    static leftContext: RegExpBuiltins$RegExpBuiltin;
    static multiline: RegExpBuiltins$RegExpBuiltin;
    static rightContext: RegExpBuiltins$RegExpBuiltin;
    static set_input: RegExpBuiltins$RegExpBuiltin;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RegExpBuiltins$RegExpBuiltin;
    static values(): (Object | null)[];
    private constructor(length: number)
    private constructor(length: number, key: TruffleString)
    readonly key: TruffleString;
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum<E extends Enum<BuiltinEnum<E>>>(): E;
    createNode(context: JSContext, builtin: JSBuiltin, construct: boolean, newTarget: boolean): Object;
    getECMAScriptVersion(): number;
    getKey(): TruffleString;
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
    isSetter(): boolean;
    isWritable(): boolean;
    prependAccessorPrefix(name: TruffleString): TruffleString;
    name(): "input" | "set_input" | "lastMatch" | "lastParen" | "leftContext" | "rightContext" | "multiline" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9";
}