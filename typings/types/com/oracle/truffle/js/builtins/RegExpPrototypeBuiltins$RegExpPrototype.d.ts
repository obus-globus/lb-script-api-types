import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Symbol } from '../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class RegExpPrototypeBuiltins$RegExpPrototype extends Enum<RegExpPrototypeBuiltins$RegExpPrototype> implements BuiltinEnum<RegExpPrototypeBuiltins$RegExpPrototype> {
    static _match: RegExpPrototypeBuiltins$RegExpPrototype;
    static _matchAll: RegExpPrototypeBuiltins$RegExpPrototype;
    static _replace: RegExpPrototypeBuiltins$RegExpPrototype;
    static _search: RegExpPrototypeBuiltins$RegExpPrototype;
    static _split: RegExpPrototypeBuiltins$RegExpPrototype;
    static compile: RegExpPrototypeBuiltins$RegExpPrototype;
    static dotAll: RegExpPrototypeBuiltins$RegExpPrototype;
    static exec: RegExpPrototypeBuiltins$RegExpPrototype;
    static flags: RegExpPrototypeBuiltins$RegExpPrototype;
    static global: RegExpPrototypeBuiltins$RegExpPrototype;
    static hasIndices: RegExpPrototypeBuiltins$RegExpPrototype;
    static ignoreCase: RegExpPrototypeBuiltins$RegExpPrototype;
    static multiline: RegExpPrototypeBuiltins$RegExpPrototype;
    static source: RegExpPrototypeBuiltins$RegExpPrototype;
    static sticky: RegExpPrototypeBuiltins$RegExpPrototype;
    static test: RegExpPrototypeBuiltins$RegExpPrototype;
    static toString: RegExpPrototypeBuiltins$RegExpPrototype;
    static unicode: RegExpPrototypeBuiltins$RegExpPrototype;
    static unicodeSets: RegExpPrototypeBuiltins$RegExpPrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): RegExpPrototypeBuiltins$RegExpPrototype;
    static values(): (Object | null)[];
    private constructor(length: number)
    private constructor(length: number, symbol: Symbol)
    readonly key: Symbol;
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum<E extends Enum<BuiltinEnum<E>>>(): E;
    createNode(context: JSContext, builtin: JSBuiltin, construct: boolean, newTarget: boolean): Object;
    getECMAScriptVersion(): number;
    getECMAScriptVersion(): number;
    getKey(): Object;
    getKey(): Object;
    getLength(): number;
    getName(): TruffleString;
    isAOTSupported(): boolean;
    isAnnexB(): boolean;
    isAnnexB(): boolean;
    isConfigurable(): boolean;
    isConstructor(): boolean;
    isEnabled(): boolean;
    isEnumerable(): boolean;
    isGetter(): boolean;
    isGetter(): boolean;
    isNewTargetConstructor(): boolean;
    isOptional(): boolean;
    isSetter(): boolean;
    isWritable(): boolean;
    prependAccessorPrefix(name: TruffleString): TruffleString;
    name(): "exec" | "test" | "toString" | "_match" | "_replace" | "_search" | "_split" | "compile" | "_matchAll" | "flags" | "source" | "global" | "multiline" | "ignoreCase" | "sticky" | "unicode" | "dotAll" | "hasIndices" | "unicodeSets";
}