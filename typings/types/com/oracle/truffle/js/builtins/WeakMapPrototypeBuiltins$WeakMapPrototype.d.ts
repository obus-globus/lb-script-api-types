import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class WeakMapPrototypeBuiltins$WeakMapPrototype extends Enum<WeakMapPrototypeBuiltins$WeakMapPrototype> implements BuiltinEnum<WeakMapPrototypeBuiltins$WeakMapPrototype> {
    static delete: WeakMapPrototypeBuiltins$WeakMapPrototype;
    static get: WeakMapPrototypeBuiltins$WeakMapPrototype;
    static getOrInsert: WeakMapPrototypeBuiltins$WeakMapPrototype;
    static getOrInsertComputed: WeakMapPrototypeBuiltins$WeakMapPrototype;
    static has: WeakMapPrototypeBuiltins$WeakMapPrototype;
    static set: WeakMapPrototypeBuiltins$WeakMapPrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): WeakMapPrototypeBuiltins$WeakMapPrototype;
    static values(): (Object | null)[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum<E extends Enum<BuiltinEnum<E>>>(): E;
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
    name(): "delete" | "set" | "get" | "has" | "getOrInsert" | "getOrInsertComputed";
}