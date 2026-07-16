import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TypedArrayPrototypeBuiltins$TypedArrayPrototype extends Enum<TypedArrayPrototypeBuiltins$TypedArrayPrototype> implements BuiltinEnum<TypedArrayPrototypeBuiltins$TypedArrayPrototype> {
    static _toStringTag: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static at: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static buffer: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static byteLength: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static byteOffset: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static copyWithin: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static entries: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static every: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static fill: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static filter: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static find: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static findIndex: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static findLast: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static findLastIndex: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static forEach: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static includes: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static indexOf: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static join: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static keys: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static lastIndexOf: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static length: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static map: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static reduce: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static reduceRight: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static reverse: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static set: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static slice: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static some: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static sort: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static subarray: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static toLocaleString: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static toReversed: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static toSorted: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static values: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static with: TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TypedArrayPrototypeBuiltins$TypedArrayPrototype;
    static values(): TypedArrayPrototypeBuiltins$TypedArrayPrototype[];
    private constructor(length: number)
    // private functionLength: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): TypedArrayPrototypeBuiltins$TypedArrayPrototype;
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
    name(): "subarray" | "set" | "forEach" | "find" | "findIndex" | "fill" | "reduce" | "reduceRight" | "sort" | "slice" | "every" | "copyWithin" | "indexOf" | "lastIndexOf" | "filter" | "some" | "map" | "toLocaleString" | "join" | "reverse" | "keys" | "values" | "entries" | "length" | "buffer" | "byteLength" | "byteOffset" | "_toStringTag" | "includes" | "at" | "findLast" | "findLastIndex" | "toReversed" | "toSorted" | "with";
}