import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CallSitePrototypeBuiltins$CallSitePrototype extends Enum<CallSitePrototypeBuiltins$CallSitePrototype> implements BuiltinEnum<CallSitePrototypeBuiltins$CallSitePrototype> {
    static getColumnNumber: CallSitePrototypeBuiltins$CallSitePrototype;
    static getEvalOrigin: CallSitePrototypeBuiltins$CallSitePrototype;
    static getFileName: CallSitePrototypeBuiltins$CallSitePrototype;
    static getFunction: CallSitePrototypeBuiltins$CallSitePrototype;
    static getFunctionName: CallSitePrototypeBuiltins$CallSitePrototype;
    static getLineNumber: CallSitePrototypeBuiltins$CallSitePrototype;
    static getMethodName: CallSitePrototypeBuiltins$CallSitePrototype;
    static getPosition: CallSitePrototypeBuiltins$CallSitePrototype;
    static getPromiseIndex: CallSitePrototypeBuiltins$CallSitePrototype;
    static getScriptNameOrSourceURL: CallSitePrototypeBuiltins$CallSitePrototype;
    static getThis: CallSitePrototypeBuiltins$CallSitePrototype;
    static getTypeName: CallSitePrototypeBuiltins$CallSitePrototype;
    static isAsync: CallSitePrototypeBuiltins$CallSitePrototype;
    static isConstructor: CallSitePrototypeBuiltins$CallSitePrototype;
    static isEval: CallSitePrototypeBuiltins$CallSitePrototype;
    static isNative: CallSitePrototypeBuiltins$CallSitePrototype;
    static isPromiseAll: CallSitePrototypeBuiltins$CallSitePrototype;
    static isToplevel: CallSitePrototypeBuiltins$CallSitePrototype;
    static toString: CallSitePrototypeBuiltins$CallSitePrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CallSitePrototypeBuiltins$CallSitePrototype;
    static values(): CallSitePrototypeBuiltins$CallSitePrototype[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): CallSitePrototypeBuiltins$CallSitePrototype;
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
    name(): "getThis" | "getTypeName" | "getFunction" | "getFunctionName" | "getMethodName" | "getFileName" | "getLineNumber" | "getColumnNumber" | "getPosition" | "getEvalOrigin" | "getScriptNameOrSourceURL" | "getPromiseIndex" | "isToplevel" | "isEval" | "isNative" | "isConstructor" | "isAsync" | "isPromiseAll" | "toString";
}