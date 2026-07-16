import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class GlobalBuiltins$Global extends Enum<GlobalBuiltins$Global> implements BuiltinEnum<GlobalBuiltins$Global> {
    static decodeURI: GlobalBuiltins$Global;
    static decodeURIComponent: GlobalBuiltins$Global;
    static encodeURI: GlobalBuiltins$Global;
    static encodeURIComponent: GlobalBuiltins$Global;
    static escape: GlobalBuiltins$Global;
    static eval: GlobalBuiltins$Global;
    static isFinite: GlobalBuiltins$Global;
    static isNaN: GlobalBuiltins$Global;
    static parseFloat: GlobalBuiltins$Global;
    static parseInt: GlobalBuiltins$Global;
    static unescape: GlobalBuiltins$Global;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GlobalBuiltins$Global;
    static values(): GlobalBuiltins$Global[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): GlobalBuiltins$Global;
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
    name(): "isNaN" | "isFinite" | "parseFloat" | "parseInt" | "encodeURI" | "encodeURIComponent" | "decodeURI" | "decodeURIComponent" | "eval" | "escape" | "unescape";
}