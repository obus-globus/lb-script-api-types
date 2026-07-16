import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DebugBuiltins$Debug extends Enum<DebugBuiltins$Debug> implements BuiltinEnum<DebugBuiltins$Debug> {
    static arraytype: DebugBuiltins$Debug;
    static assertInt: DebugBuiltins$Debug;
    static className: DebugBuiltins$Debug;
    static class_: DebugBuiltins$Debug;
    static continueInInterpreter: DebugBuiltins$Debug;
    static createSafeInteger: DebugBuiltins$Debug;
    static dumpFunctionTree: DebugBuiltins$Debug;
    static dumpHeap: DebugBuiltins$Debug;
    static getClass: DebugBuiltins$Debug;
    static isHolesArray: DebugBuiltins$Debug;
    static jsStack: DebugBuiltins$Debug;
    static loadModule: DebugBuiltins$Debug;
    static neverPartOfCompilation: DebugBuiltins$Debug;
    static printObject: DebugBuiltins$Debug;
    static shape: DebugBuiltins$Debug;
    static srcattr: DebugBuiltins$Debug;
    static stringCompare: DebugBuiltins$Debug;
    static systemGC: DebugBuiltins$Debug;
    static systemProperties: DebugBuiltins$Debug;
    static systemProperty: DebugBuiltins$Debug;
    static toJavaString: DebugBuiltins$Debug;
    static typedArrayDetachBuffer: DebugBuiltins$Debug;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DebugBuiltins$Debug;
    static values(): DebugBuiltins$Debug[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): DebugBuiltins$Debug;
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
    name(): "class_" | "getClass" | "className" | "shape" | "dumpFunctionTree" | "printObject" | "toJavaString" | "srcattr" | "arraytype" | "assertInt" | "continueInInterpreter" | "stringCompare" | "isHolesArray" | "jsStack" | "loadModule" | "createSafeInteger" | "typedArrayDetachBuffer" | "systemGC" | "systemProperty" | "systemProperties" | "neverPartOfCompilation" | "dumpHeap";
}