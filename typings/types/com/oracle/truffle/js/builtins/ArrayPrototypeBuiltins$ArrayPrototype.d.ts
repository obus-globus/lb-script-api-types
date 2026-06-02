import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ArrayPrototypeBuiltins$ArrayPrototype extends Enum<ArrayPrototypeBuiltins$ArrayPrototype> implements BuiltinEnum<ArrayPrototypeBuiltins$ArrayPrototype> {
    static at: ArrayPrototypeBuiltins$ArrayPrototype;
    static concat: ArrayPrototypeBuiltins$ArrayPrototype;
    static copyWithin: ArrayPrototypeBuiltins$ArrayPrototype;
    static entries: ArrayPrototypeBuiltins$ArrayPrototype;
    static every: ArrayPrototypeBuiltins$ArrayPrototype;
    static fill: ArrayPrototypeBuiltins$ArrayPrototype;
    static filter: ArrayPrototypeBuiltins$ArrayPrototype;
    static find: ArrayPrototypeBuiltins$ArrayPrototype;
    static findIndex: ArrayPrototypeBuiltins$ArrayPrototype;
    static findLast: ArrayPrototypeBuiltins$ArrayPrototype;
    static findLastIndex: ArrayPrototypeBuiltins$ArrayPrototype;
    static flat: ArrayPrototypeBuiltins$ArrayPrototype;
    static flatMap: ArrayPrototypeBuiltins$ArrayPrototype;
    static forEach: ArrayPrototypeBuiltins$ArrayPrototype;
    static includes: ArrayPrototypeBuiltins$ArrayPrototype;
    static indexOf: ArrayPrototypeBuiltins$ArrayPrototype;
    static join: ArrayPrototypeBuiltins$ArrayPrototype;
    static keys: ArrayPrototypeBuiltins$ArrayPrototype;
    static lastIndexOf: ArrayPrototypeBuiltins$ArrayPrototype;
    static map: ArrayPrototypeBuiltins$ArrayPrototype;
    static pop: ArrayPrototypeBuiltins$ArrayPrototype;
    static push: ArrayPrototypeBuiltins$ArrayPrototype;
    static reduce: ArrayPrototypeBuiltins$ArrayPrototype;
    static reduceRight: ArrayPrototypeBuiltins$ArrayPrototype;
    static reverse: ArrayPrototypeBuiltins$ArrayPrototype;
    static shift: ArrayPrototypeBuiltins$ArrayPrototype;
    static slice: ArrayPrototypeBuiltins$ArrayPrototype;
    static some: ArrayPrototypeBuiltins$ArrayPrototype;
    static sort: ArrayPrototypeBuiltins$ArrayPrototype;
    static splice: ArrayPrototypeBuiltins$ArrayPrototype;
    static toLocaleString: ArrayPrototypeBuiltins$ArrayPrototype;
    static toReversed: ArrayPrototypeBuiltins$ArrayPrototype;
    static toSorted: ArrayPrototypeBuiltins$ArrayPrototype;
    static toSpliced: ArrayPrototypeBuiltins$ArrayPrototype;
    static toString: ArrayPrototypeBuiltins$ArrayPrototype;
    static unshift: ArrayPrototypeBuiltins$ArrayPrototype;
    static values: ArrayPrototypeBuiltins$ArrayPrototype;
    static with: ArrayPrototypeBuiltins$ArrayPrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ArrayPrototypeBuiltins$ArrayPrototype;
    static values(): (Object | null)[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum<E extends Enum<BuiltinEnum<E>>>(): E;
    createNode(context: JSContext, builtin: JSBuiltin, construct: boolean, newTarget: boolean): Object;
    getECMAScriptVersion(): number;
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
    name(): "push" | "pop" | "slice" | "shift" | "unshift" | "toString" | "concat" | "indexOf" | "lastIndexOf" | "join" | "toLocaleString" | "splice" | "every" | "filter" | "forEach" | "some" | "map" | "sort" | "reduce" | "reduceRight" | "reverse" | "find" | "findIndex" | "fill" | "copyWithin" | "keys" | "values" | "entries" | "includes" | "flat" | "flatMap" | "at" | "findLast" | "findLastIndex" | "toReversed" | "toSorted" | "toSpliced" | "with";
}