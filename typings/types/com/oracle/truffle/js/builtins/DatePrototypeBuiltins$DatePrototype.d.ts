import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DatePrototypeBuiltins$DatePrototype extends Enum<DatePrototypeBuiltins$DatePrototype> implements BuiltinEnum<DatePrototypeBuiltins$DatePrototype> {
    static _toPrimitive: DatePrototypeBuiltins$DatePrototype;
    static getDate: DatePrototypeBuiltins$DatePrototype;
    static getDay: DatePrototypeBuiltins$DatePrototype;
    static getFullYear: DatePrototypeBuiltins$DatePrototype;
    static getHours: DatePrototypeBuiltins$DatePrototype;
    static getMilliseconds: DatePrototypeBuiltins$DatePrototype;
    static getMinutes: DatePrototypeBuiltins$DatePrototype;
    static getMonth: DatePrototypeBuiltins$DatePrototype;
    static getSeconds: DatePrototypeBuiltins$DatePrototype;
    static getTime: DatePrototypeBuiltins$DatePrototype;
    static getTimezoneOffset: DatePrototypeBuiltins$DatePrototype;
    static getUTCDate: DatePrototypeBuiltins$DatePrototype;
    static getUTCDay: DatePrototypeBuiltins$DatePrototype;
    static getUTCFullYear: DatePrototypeBuiltins$DatePrototype;
    static getUTCHours: DatePrototypeBuiltins$DatePrototype;
    static getUTCMilliseconds: DatePrototypeBuiltins$DatePrototype;
    static getUTCMinutes: DatePrototypeBuiltins$DatePrototype;
    static getUTCMonth: DatePrototypeBuiltins$DatePrototype;
    static getUTCSeconds: DatePrototypeBuiltins$DatePrototype;
    static getYear: DatePrototypeBuiltins$DatePrototype;
    static setDate: DatePrototypeBuiltins$DatePrototype;
    static setFullYear: DatePrototypeBuiltins$DatePrototype;
    static setHours: DatePrototypeBuiltins$DatePrototype;
    static setMilliseconds: DatePrototypeBuiltins$DatePrototype;
    static setMinutes: DatePrototypeBuiltins$DatePrototype;
    static setMonth: DatePrototypeBuiltins$DatePrototype;
    static setSeconds: DatePrototypeBuiltins$DatePrototype;
    static setTime: DatePrototypeBuiltins$DatePrototype;
    static setUTCDate: DatePrototypeBuiltins$DatePrototype;
    static setUTCFullYear: DatePrototypeBuiltins$DatePrototype;
    static setUTCHours: DatePrototypeBuiltins$DatePrototype;
    static setUTCMilliseconds: DatePrototypeBuiltins$DatePrototype;
    static setUTCMinutes: DatePrototypeBuiltins$DatePrototype;
    static setUTCMonth: DatePrototypeBuiltins$DatePrototype;
    static setUTCSeconds: DatePrototypeBuiltins$DatePrototype;
    static setYear: DatePrototypeBuiltins$DatePrototype;
    static toDateString: DatePrototypeBuiltins$DatePrototype;
    static toISOString: DatePrototypeBuiltins$DatePrototype;
    static toJSON: DatePrototypeBuiltins$DatePrototype;
    static toLocaleDateString: DatePrototypeBuiltins$DatePrototype;
    static toLocaleString: DatePrototypeBuiltins$DatePrototype;
    static toLocaleTimeString: DatePrototypeBuiltins$DatePrototype;
    static toString: DatePrototypeBuiltins$DatePrototype;
    static toTemporalInstant: DatePrototypeBuiltins$DatePrototype;
    static toTimeString: DatePrototypeBuiltins$DatePrototype;
    static toUTCString: DatePrototypeBuiltins$DatePrototype;
    static valueOf: DatePrototypeBuiltins$DatePrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DatePrototypeBuiltins$DatePrototype;
    static values(): DatePrototypeBuiltins$DatePrototype[];
    private constructor(length: number)
    // private isUTC: boolean;
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): DatePrototypeBuiltins$DatePrototype;
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
    name(): "valueOf" | "toString" | "toDateString" | "toTimeString" | "toLocaleString" | "toLocaleDateString" | "toLocaleTimeString" | "toUTCString" | "toISOString" | "getTime" | "getFullYear" | "getUTCFullYear" | "getMonth" | "getUTCMonth" | "getDate" | "getUTCDate" | "getDay" | "getUTCDay" | "getHours" | "getUTCHours" | "getMinutes" | "getUTCMinutes" | "getSeconds" | "getUTCSeconds" | "getMilliseconds" | "getUTCMilliseconds" | "setTime" | "setDate" | "setUTCDate" | "setFullYear" | "setUTCFullYear" | "setMonth" | "setUTCMonth" | "setHours" | "setUTCHours" | "setMinutes" | "setUTCMinutes" | "setSeconds" | "setUTCSeconds" | "setMilliseconds" | "setUTCMilliseconds" | "getTimezoneOffset" | "toJSON" | "_toPrimitive" | "toTemporalInstant" | "getYear" | "setYear";
}