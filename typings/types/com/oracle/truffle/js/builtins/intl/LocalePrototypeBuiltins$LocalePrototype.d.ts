import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { BuiltinArgumentBuilder } from '../../../../../../com/oracle/truffle/js/nodes/function/BuiltinArgumentBuilder.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class LocalePrototypeBuiltins$LocalePrototype extends Enum<LocalePrototypeBuiltins$LocalePrototype> implements BuiltinEnum<LocalePrototypeBuiltins$LocalePrototype> {
    static baseName: LocalePrototypeBuiltins$LocalePrototype;
    static calendar: LocalePrototypeBuiltins$LocalePrototype;
    static caseFirst: LocalePrototypeBuiltins$LocalePrototype;
    static collation: LocalePrototypeBuiltins$LocalePrototype;
    static firstDayOfWeek: LocalePrototypeBuiltins$LocalePrototype;
    static getCalendars: LocalePrototypeBuiltins$LocalePrototype;
    static getCollations: LocalePrototypeBuiltins$LocalePrototype;
    static getHourCycles: LocalePrototypeBuiltins$LocalePrototype;
    static getNumberingSystems: LocalePrototypeBuiltins$LocalePrototype;
    static getTextInfo: LocalePrototypeBuiltins$LocalePrototype;
    static getTimeZones: LocalePrototypeBuiltins$LocalePrototype;
    static getWeekInfo: LocalePrototypeBuiltins$LocalePrototype;
    static hourCycle: LocalePrototypeBuiltins$LocalePrototype;
    static language: LocalePrototypeBuiltins$LocalePrototype;
    static maximize: LocalePrototypeBuiltins$LocalePrototype;
    static minimize: LocalePrototypeBuiltins$LocalePrototype;
    static numberingSystem: LocalePrototypeBuiltins$LocalePrototype;
    static numeric: LocalePrototypeBuiltins$LocalePrototype;
    static region: LocalePrototypeBuiltins$LocalePrototype;
    static script: LocalePrototypeBuiltins$LocalePrototype;
    static toString: LocalePrototypeBuiltins$LocalePrototype;
    static variants: LocalePrototypeBuiltins$LocalePrototype;
    static stripName(paramname: TruffleString): TruffleString;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LocalePrototypeBuiltins$LocalePrototype;
    static values(): (Object | null)[];
    private constructor(length: number)
    readonly length: number;
    args(): BuiltinArgumentBuilder;
    asEnum(): LocalePrototypeBuiltins$LocalePrototype;
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
    name(): "maximize" | "minimize" | "toString" | "baseName" | "calendar" | "caseFirst" | "collation" | "firstDayOfWeek" | "hourCycle" | "numeric" | "numberingSystem" | "language" | "script" | "region" | "variants" | "getCalendars" | "getCollations" | "getHourCycles" | "getNumberingSystems" | "getTimeZones" | "getTextInfo" | "getWeekInfo";
}