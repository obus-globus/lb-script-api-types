import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MapPrototypeBuiltins$MapPrototype extends Enum<MapPrototypeBuiltins$MapPrototype> implements BuiltinEnum<MapPrototypeBuiltins$MapPrototype> {
    static clear: MapPrototypeBuiltins$MapPrototype;
    static delete: MapPrototypeBuiltins$MapPrototype;
    static entries: MapPrototypeBuiltins$MapPrototype;
    static forEach: MapPrototypeBuiltins$MapPrototype;
    static get: MapPrototypeBuiltins$MapPrototype;
    static getOrInsert: MapPrototypeBuiltins$MapPrototype;
    static getOrInsertComputed: MapPrototypeBuiltins$MapPrototype;
    static has: MapPrototypeBuiltins$MapPrototype;
    static keys: MapPrototypeBuiltins$MapPrototype;
    static set: MapPrototypeBuiltins$MapPrototype;
    static size: MapPrototypeBuiltins$MapPrototype;
    static values: MapPrototypeBuiltins$MapPrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MapPrototypeBuiltins$MapPrototype;
    static values(): (Object | null)[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): MapPrototypeBuiltins$MapPrototype;
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
    name(): "clear" | "delete" | "set" | "get" | "has" | "forEach" | "keys" | "values" | "entries" | "size" | "getOrInsert" | "getOrInsertComputed";
}