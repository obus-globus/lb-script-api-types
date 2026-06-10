import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class PolyglotInternalBuiltins$PolyglotInternal extends Enum<PolyglotInternalBuiltins$PolyglotInternal> implements BuiltinEnum<PolyglotInternalBuiltins$PolyglotInternal> {
    static construct: PolyglotInternalBuiltins$PolyglotInternal;
    static execute: PolyglotInternalBuiltins$PolyglotInternal;
    static getSize: PolyglotInternalBuiltins$PolyglotInternal;
    static hasKeys: PolyglotInternalBuiltins$PolyglotInternal;
    static hasSize: PolyglotInternalBuiltins$PolyglotInternal;
    static isBoxed: PolyglotInternalBuiltins$PolyglotInternal;
    static isExecutable: PolyglotInternalBuiltins$PolyglotInternal;
    static isInstantiable: PolyglotInternalBuiltins$PolyglotInternal;
    static isNull: PolyglotInternalBuiltins$PolyglotInternal;
    static keys: PolyglotInternalBuiltins$PolyglotInternal;
    static read: PolyglotInternalBuiltins$PolyglotInternal;
    static remove: PolyglotInternalBuiltins$PolyglotInternal;
    static toJSValue: PolyglotInternalBuiltins$PolyglotInternal;
    static toPolyglotValue: PolyglotInternalBuiltins$PolyglotInternal;
    static unbox: PolyglotInternalBuiltins$PolyglotInternal;
    static write: PolyglotInternalBuiltins$PolyglotInternal;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PolyglotInternalBuiltins$PolyglotInternal;
    static values(): (Object | null)[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): PolyglotInternalBuiltins$PolyglotInternal;
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
    name(): "isExecutable" | "isBoxed" | "isNull" | "hasSize" | "read" | "write" | "unbox" | "construct" | "execute" | "getSize" | "remove" | "toJSValue" | "toPolyglotValue" | "keys" | "hasKeys" | "isInstantiable";
}