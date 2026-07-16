import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class GlobalCommonJSRequireBuiltins$GlobalRequire extends Enum<GlobalCommonJSRequireBuiltins$GlobalRequire> implements BuiltinEnum<GlobalCommonJSRequireBuiltins$GlobalRequire> {
    static dirnameGetter: GlobalCommonJSRequireBuiltins$GlobalRequire;
    static filenameGetter: GlobalCommonJSRequireBuiltins$GlobalRequire;
    static globalExportsGetter: GlobalCommonJSRequireBuiltins$GlobalRequire;
    static globalModuleGetter: GlobalCommonJSRequireBuiltins$GlobalRequire;
    static require: GlobalCommonJSRequireBuiltins$GlobalRequire;
    static resolve: GlobalCommonJSRequireBuiltins$GlobalRequire;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): GlobalCommonJSRequireBuiltins$GlobalRequire;
    static values(): GlobalCommonJSRequireBuiltins$GlobalRequire[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): GlobalCommonJSRequireBuiltins$GlobalRequire;
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
    name(): "require" | "dirnameGetter" | "filenameGetter" | "globalExportsGetter" | "globalModuleGetter" | "resolve";
}