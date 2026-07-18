import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ArrayBufferPrototypeBuiltins$ArrayBufferPrototype extends Enum<ArrayBufferPrototypeBuiltins$ArrayBufferPrototype> implements BuiltinEnum<ArrayBufferPrototypeBuiltins$ArrayBufferPrototype> {
    static byteLength: ArrayBufferPrototypeBuiltins$ArrayBufferPrototype;
    static detached: ArrayBufferPrototypeBuiltins$ArrayBufferPrototype;
    static maxByteLength: ArrayBufferPrototypeBuiltins$ArrayBufferPrototype;
    static resizable: ArrayBufferPrototypeBuiltins$ArrayBufferPrototype;
    static resize: ArrayBufferPrototypeBuiltins$ArrayBufferPrototype;
    static slice: ArrayBufferPrototypeBuiltins$ArrayBufferPrototype;
    static transfer: ArrayBufferPrototypeBuiltins$ArrayBufferPrototype;
    static transferToFixedLength: ArrayBufferPrototypeBuiltins$ArrayBufferPrototype;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ArrayBufferPrototypeBuiltins$ArrayBufferPrototype;
    static values(): ArrayBufferPrototypeBuiltins$ArrayBufferPrototype[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): ArrayBufferPrototypeBuiltins$ArrayBufferPrototype;
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
    name(): "byteLength" | "slice" | "detached" | "transfer" | "transferToFixedLength" | "maxByteLength" | "resizable" | "resize";
}