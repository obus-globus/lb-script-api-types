import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PromiseFunctionBuiltins$PromiseFunction extends Enum<PromiseFunctionBuiltins$PromiseFunction> implements BuiltinEnum<PromiseFunctionBuiltins$PromiseFunction> {
    static all: PromiseFunctionBuiltins$PromiseFunction;
    static allSettled: PromiseFunctionBuiltins$PromiseFunction;
    static any: PromiseFunctionBuiltins$PromiseFunction;
    static race: PromiseFunctionBuiltins$PromiseFunction;
    static reject: PromiseFunctionBuiltins$PromiseFunction;
    static resolve: PromiseFunctionBuiltins$PromiseFunction;
    static try_: PromiseFunctionBuiltins$PromiseFunction;
    static withResolvers: PromiseFunctionBuiltins$PromiseFunction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PromiseFunctionBuiltins$PromiseFunction;
    static values(): PromiseFunctionBuiltins$PromiseFunction[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): PromiseFunctionBuiltins$PromiseFunction;
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
    name(): "all" | "race" | "reject" | "resolve" | "allSettled" | "any" | "withResolvers" | "try_";
}