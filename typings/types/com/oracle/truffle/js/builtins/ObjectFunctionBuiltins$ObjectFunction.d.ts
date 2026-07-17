import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ObjectFunctionBuiltins$ObjectFunction extends Enum<ObjectFunctionBuiltins$ObjectFunction> implements BuiltinEnum<ObjectFunctionBuiltins$ObjectFunction> {
    static assign: ObjectFunctionBuiltins$ObjectFunction;
    static create: ObjectFunctionBuiltins$ObjectFunction;
    static defineProperties: ObjectFunctionBuiltins$ObjectFunction;
    static defineProperty: ObjectFunctionBuiltins$ObjectFunction;
    static entries: ObjectFunctionBuiltins$ObjectFunction;
    static freeze: ObjectFunctionBuiltins$ObjectFunction;
    static fromEntries: ObjectFunctionBuiltins$ObjectFunction;
    static getOwnPropertyDescriptor: ObjectFunctionBuiltins$ObjectFunction;
    static getOwnPropertyDescriptors: ObjectFunctionBuiltins$ObjectFunction;
    static getOwnPropertyNames: ObjectFunctionBuiltins$ObjectFunction;
    static getOwnPropertySymbols: ObjectFunctionBuiltins$ObjectFunction;
    static getPrototypeOf: ObjectFunctionBuiltins$ObjectFunction;
    static groupBy: ObjectFunctionBuiltins$ObjectFunction;
    static hasOwn: ObjectFunctionBuiltins$ObjectFunction;
    static is: ObjectFunctionBuiltins$ObjectFunction;
    static isExtensible: ObjectFunctionBuiltins$ObjectFunction;
    static isFrozen: ObjectFunctionBuiltins$ObjectFunction;
    static isSealed: ObjectFunctionBuiltins$ObjectFunction;
    static keys: ObjectFunctionBuiltins$ObjectFunction;
    static preventExtensions: ObjectFunctionBuiltins$ObjectFunction;
    static seal: ObjectFunctionBuiltins$ObjectFunction;
    static setPrototypeOf: ObjectFunctionBuiltins$ObjectFunction;
    static values: ObjectFunctionBuiltins$ObjectFunction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ObjectFunctionBuiltins$ObjectFunction;
    static values(): ObjectFunctionBuiltins$ObjectFunction[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): ObjectFunctionBuiltins$ObjectFunction;
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
    name(): "create" | "defineProperties" | "defineProperty" | "freeze" | "getOwnPropertyDescriptor" | "getOwnPropertyNames" | "getPrototypeOf" | "isExtensible" | "isFrozen" | "isSealed" | "keys" | "preventExtensions" | "seal" | "setPrototypeOf" | "is" | "getOwnPropertySymbols" | "assign" | "getOwnPropertyDescriptors" | "values" | "entries" | "fromEntries" | "hasOwn" | "groupBy";
}