import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TestV8Builtins$TestV8 extends Enum<TestV8Builtins$TestV8> implements BuiltinEnum<TestV8Builtins$TestV8> {
    static atomicsNumUnresolvedAsyncPromisesForTesting: TestV8Builtins$TestV8;
    static atomicsNumWaitersForTesting: TestV8Builtins$TestV8;
    static className: TestV8Builtins$TestV8;
    static class_: TestV8Builtins$TestV8;
    static constructDouble: TestV8Builtins$TestV8;
    static createAsyncFromSyncIterator: TestV8Builtins$TestV8;
    static createPrivateSymbol: TestV8Builtins$TestV8;
    static deoptimize: TestV8Builtins$TestV8;
    static doubleHi: TestV8Builtins$TestV8;
    static doubleLo: TestV8Builtins$TestV8;
    static enqueueJob: TestV8Builtins$TestV8;
    static gc: TestV8Builtins$TestV8;
    static referenceEqual: TestV8Builtins$TestV8;
    static runMicrotasks: TestV8Builtins$TestV8;
    static setAllowAtomicsWait: TestV8Builtins$TestV8;
    static setTimeout: TestV8Builtins$TestV8;
    static stringCompare: TestV8Builtins$TestV8;
    static symbolIsPrivate: TestV8Builtins$TestV8;
    static toLength: TestV8Builtins$TestV8;
    static toName: TestV8Builtins$TestV8;
    static toNumber: TestV8Builtins$TestV8;
    static toPrimitive: TestV8Builtins$TestV8;
    static toPrimitiveNumber: TestV8Builtins$TestV8;
    static toPrimitiveString: TestV8Builtins$TestV8;
    static toStringConv: TestV8Builtins$TestV8;
    static typedArrayDetachBuffer: TestV8Builtins$TestV8;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TestV8Builtins$TestV8;
    static values(): TestV8Builtins$TestV8[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): TestV8Builtins$TestV8;
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
    name(): "class_" | "className" | "createAsyncFromSyncIterator" | "runMicrotasks" | "enqueueJob" | "setTimeout" | "stringCompare" | "typedArrayDetachBuffer" | "constructDouble" | "doubleHi" | "doubleLo" | "deoptimize" | "gc" | "referenceEqual" | "toLength" | "toStringConv" | "toName" | "toNumber" | "toPrimitive" | "toPrimitiveString" | "toPrimitiveNumber" | "atomicsNumWaitersForTesting" | "atomicsNumUnresolvedAsyncPromisesForTesting" | "setAllowAtomicsWait" | "createPrivateSymbol" | "symbolIsPrivate";
}