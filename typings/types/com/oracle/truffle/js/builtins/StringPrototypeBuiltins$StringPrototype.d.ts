import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class StringPrototypeBuiltins$StringPrototype extends Enum<StringPrototypeBuiltins$StringPrototype> implements BuiltinEnum<StringPrototypeBuiltins$StringPrototype> {
    static _iterator: StringPrototypeBuiltins$StringPrototype;
    static anchor: StringPrototypeBuiltins$StringPrototype;
    static at: StringPrototypeBuiltins$StringPrototype;
    static big: StringPrototypeBuiltins$StringPrototype;
    static blink: StringPrototypeBuiltins$StringPrototype;
    static bold: StringPrototypeBuiltins$StringPrototype;
    static charAt: StringPrototypeBuiltins$StringPrototype;
    static charCodeAt: StringPrototypeBuiltins$StringPrototype;
    static codePointAt: StringPrototypeBuiltins$StringPrototype;
    static concat: StringPrototypeBuiltins$StringPrototype;
    static endsWith: StringPrototypeBuiltins$StringPrototype;
    static fixed: StringPrototypeBuiltins$StringPrototype;
    static fontcolor: StringPrototypeBuiltins$StringPrototype;
    static fontsize: StringPrototypeBuiltins$StringPrototype;
    static includes: StringPrototypeBuiltins$StringPrototype;
    static indexOf: StringPrototypeBuiltins$StringPrototype;
    static isWellFormed: StringPrototypeBuiltins$StringPrototype;
    static italics: StringPrototypeBuiltins$StringPrototype;
    static lastIndexOf: StringPrototypeBuiltins$StringPrototype;
    static link: StringPrototypeBuiltins$StringPrototype;
    static localeCompare: StringPrototypeBuiltins$StringPrototype;
    static match: StringPrototypeBuiltins$StringPrototype;
    static matchAll: StringPrototypeBuiltins$StringPrototype;
    static normalize: StringPrototypeBuiltins$StringPrototype;
    static padEnd: StringPrototypeBuiltins$StringPrototype;
    static padStart: StringPrototypeBuiltins$StringPrototype;
    static repeat: StringPrototypeBuiltins$StringPrototype;
    static replace: StringPrototypeBuiltins$StringPrototype;
    static replaceAll: StringPrototypeBuiltins$StringPrototype;
    static search: StringPrototypeBuiltins$StringPrototype;
    static slice: StringPrototypeBuiltins$StringPrototype;
    static small: StringPrototypeBuiltins$StringPrototype;
    static split: StringPrototypeBuiltins$StringPrototype;
    static startsWith: StringPrototypeBuiltins$StringPrototype;
    static strike: StringPrototypeBuiltins$StringPrototype;
    static sub: StringPrototypeBuiltins$StringPrototype;
    static substr: StringPrototypeBuiltins$StringPrototype;
    static substring: StringPrototypeBuiltins$StringPrototype;
    static sup: StringPrototypeBuiltins$StringPrototype;
    static toLocaleLowerCase: StringPrototypeBuiltins$StringPrototype;
    static toLocaleUpperCase: StringPrototypeBuiltins$StringPrototype;
    static toLowerCase: StringPrototypeBuiltins$StringPrototype;
    static toString: StringPrototypeBuiltins$StringPrototype;
    static toUpperCase: StringPrototypeBuiltins$StringPrototype;
    static toWellFormed: StringPrototypeBuiltins$StringPrototype;
    static trim: StringPrototypeBuiltins$StringPrototype;
    static trimEnd: StringPrototypeBuiltins$StringPrototype;
    static trimStart: StringPrototypeBuiltins$StringPrototype;
    static valueOf: StringPrototypeBuiltins$StringPrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): StringPrototypeBuiltins$StringPrototype;
    static values(): (Object | null)[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): StringPrototypeBuiltins$StringPrototype;
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
    name(): "charAt" | "charCodeAt" | "concat" | "indexOf" | "lastIndexOf" | "localeCompare" | "match" | "replace" | "search" | "slice" | "split" | "substring" | "toLowerCase" | "toLocaleLowerCase" | "toUpperCase" | "toLocaleUpperCase" | "toString" | "valueOf" | "trim" | "substr" | "anchor" | "big" | "blink" | "bold" | "fixed" | "fontcolor" | "fontsize" | "italics" | "link" | "small" | "strike" | "sub" | "sup" | "startsWith" | "endsWith" | "includes" | "repeat" | "codePointAt" | "_iterator" | "normalize" | "padStart" | "padEnd" | "trimStart" | "trimEnd" | "matchAll" | "replaceAll" | "at" | "isWellFormed" | "toWellFormed";
}