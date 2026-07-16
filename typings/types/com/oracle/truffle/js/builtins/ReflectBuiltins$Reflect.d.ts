import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ReflectBuiltins$Reflect extends Enum<ReflectBuiltins$Reflect> implements BuiltinEnum<ReflectBuiltins$Reflect> {
    static apply: ReflectBuiltins$Reflect;
    static construct: ReflectBuiltins$Reflect;
    static defineProperty: ReflectBuiltins$Reflect;
    static deleteProperty: ReflectBuiltins$Reflect;
    static get: ReflectBuiltins$Reflect;
    static getOwnPropertyDescriptor: ReflectBuiltins$Reflect;
    static getPrototypeOf: ReflectBuiltins$Reflect;
    static has: ReflectBuiltins$Reflect;
    static isExtensible: ReflectBuiltins$Reflect;
    static ownKeys: ReflectBuiltins$Reflect;
    static preventExtensions: ReflectBuiltins$Reflect;
    static set: ReflectBuiltins$Reflect;
    static setPrototypeOf: ReflectBuiltins$Reflect;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ReflectBuiltins$Reflect;
    static values(): ReflectBuiltins$Reflect[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): ReflectBuiltins$Reflect;
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
    name(): "apply" | "construct" | "defineProperty" | "deleteProperty" | "get" | "getOwnPropertyDescriptor" | "getPrototypeOf" | "has" | "isExtensible" | "ownKeys" | "preventExtensions" | "set" | "setPrototypeOf";
}