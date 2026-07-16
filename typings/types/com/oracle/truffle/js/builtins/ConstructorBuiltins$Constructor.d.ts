import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ConstructorBuiltins$Constructor extends Enum<ConstructorBuiltins$Constructor> implements BuiltinEnum<ConstructorBuiltins$Constructor> {
    static AbstractModuleSource: ConstructorBuiltins$Constructor;
    static AggregateError: ConstructorBuiltins$Constructor;
    static Array: ConstructorBuiltins$Constructor;
    static ArrayBuffer: ConstructorBuiltins$Constructor;
    static AsyncFunction: ConstructorBuiltins$Constructor;
    static AsyncGeneratorFunction: ConstructorBuiltins$Constructor;
    static AsyncIterator: ConstructorBuiltins$Constructor;
    static BigInt: ConstructorBuiltins$Constructor;
    static BigInt64Array: ConstructorBuiltins$Constructor;
    static BigUint64Array: ConstructorBuiltins$Constructor;
    static Boolean: ConstructorBuiltins$Constructor;
    static Collator: ConstructorBuiltins$Constructor;
    static CompileError: ConstructorBuiltins$Constructor;
    static DataView: ConstructorBuiltins$Constructor;
    static Date: ConstructorBuiltins$Constructor;
    static DateTimeFormat: ConstructorBuiltins$Constructor;
    static DisplayNames: ConstructorBuiltins$Constructor;
    static Duration: ConstructorBuiltins$Constructor;
    static DurationFormat: ConstructorBuiltins$Constructor;
    static Error: ConstructorBuiltins$Constructor;
    static EvalError: ConstructorBuiltins$Constructor;
    static FinalizationRegistry: ConstructorBuiltins$Constructor;
    static Float16Array: ConstructorBuiltins$Constructor;
    static Float32Array: ConstructorBuiltins$Constructor;
    static Float64Array: ConstructorBuiltins$Constructor;
    static Function: ConstructorBuiltins$Constructor;
    static GeneratorFunction: ConstructorBuiltins$Constructor;
    static Global: ConstructorBuiltins$Constructor;
    static Instance: ConstructorBuiltins$Constructor;
    static Instant: ConstructorBuiltins$Constructor;
    static Int16Array: ConstructorBuiltins$Constructor;
    static Int32Array: ConstructorBuiltins$Constructor;
    static Int8Array: ConstructorBuiltins$Constructor;
    static Iterator: ConstructorBuiltins$Constructor;
    static JSAdapter: ConstructorBuiltins$Constructor;
    static JavaImporter: ConstructorBuiltins$Constructor;
    static LinkError: ConstructorBuiltins$Constructor;
    static ListFormat: ConstructorBuiltins$Constructor;
    static Locale: ConstructorBuiltins$Constructor;
    static Map: ConstructorBuiltins$Constructor;
    static Memory: ConstructorBuiltins$Constructor;
    static Module: ConstructorBuiltins$Constructor;
    static Number: ConstructorBuiltins$Constructor;
    static NumberFormat: ConstructorBuiltins$Constructor;
    static Object: ConstructorBuiltins$Constructor;
    static PlainDate: ConstructorBuiltins$Constructor;
    static PlainDateTime: ConstructorBuiltins$Constructor;
    static PlainMonthDay: ConstructorBuiltins$Constructor;
    static PlainTime: ConstructorBuiltins$Constructor;
    static PlainYearMonth: ConstructorBuiltins$Constructor;
    static PluralRules: ConstructorBuiltins$Constructor;
    static Promise: ConstructorBuiltins$Constructor;
    static Proxy: ConstructorBuiltins$Constructor;
    static RangeError: ConstructorBuiltins$Constructor;
    static ReferenceError: ConstructorBuiltins$Constructor;
    static RegExp: ConstructorBuiltins$Constructor;
    static RelativeTimeFormat: ConstructorBuiltins$Constructor;
    static RuntimeError: ConstructorBuiltins$Constructor;
    static Segmenter: ConstructorBuiltins$Constructor;
    static Set: ConstructorBuiltins$Constructor;
    static ShadowRealm: ConstructorBuiltins$Constructor;
    static SharedArrayBuffer: ConstructorBuiltins$Constructor;
    static String: ConstructorBuiltins$Constructor;
    static Symbol: ConstructorBuiltins$Constructor;
    static SyntaxError: ConstructorBuiltins$Constructor;
    static Table: ConstructorBuiltins$Constructor;
    static TypeError: ConstructorBuiltins$Constructor;
    static TypedArray: ConstructorBuiltins$Constructor;
    static URIError: ConstructorBuiltins$Constructor;
    static Uint16Array: ConstructorBuiltins$Constructor;
    static Uint32Array: ConstructorBuiltins$Constructor;
    static Uint8Array: ConstructorBuiltins$Constructor;
    static Uint8ClampedArray: ConstructorBuiltins$Constructor;
    static WeakMap: ConstructorBuiltins$Constructor;
    static WeakRef: ConstructorBuiltins$Constructor;
    static WeakSet: ConstructorBuiltins$Constructor;
    static Worker: ConstructorBuiltins$Constructor;
    static ZonedDateTime: ConstructorBuiltins$Constructor;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): ConstructorBuiltins$Constructor;
    static values(): ConstructorBuiltins$Constructor[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): ConstructorBuiltins$Constructor;
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
    name(): "Array" | "Boolean" | "Date" | "RegExp" | "String" | "Object" | "Number" | "BigInt" | "Function" | "ArrayBuffer" | "Collator" | "NumberFormat" | "ListFormat" | "PluralRules" | "DateTimeFormat" | "RelativeTimeFormat" | "Segmenter" | "DisplayNames" | "Locale" | "DurationFormat" | "Error" | "RangeError" | "TypeError" | "ReferenceError" | "SyntaxError" | "EvalError" | "URIError" | "AggregateError" | "CompileError" | "LinkError" | "RuntimeError" | "Int8Array" | "Uint8Array" | "Uint8ClampedArray" | "Int16Array" | "Uint16Array" | "Int32Array" | "Uint32Array" | "Float16Array" | "Float32Array" | "Float64Array" | "BigInt64Array" | "BigUint64Array" | "DataView" | "Map" | "Set" | "WeakRef" | "FinalizationRegistry" | "WeakMap" | "WeakSet" | "Iterator" | "AsyncIterator" | "GeneratorFunction" | "Proxy" | "Promise" | "AsyncFunction" | "SharedArrayBuffer" | "AsyncGeneratorFunction" | "Global" | "Instance" | "Memory" | "Module" | "Table" | "ShadowRealm" | "Worker" | "PlainTime" | "PlainDate" | "PlainDateTime" | "Duration" | "PlainYearMonth" | "PlainMonthDay" | "Instant" | "ZonedDateTime" | "TypedArray" | "Symbol" | "AbstractModuleSource" | "JSAdapter" | "JavaImporter";
}