import type { Property } from '../../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSBuiltinsContainer } from '../../../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructor } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSConstructorFactory$WithFunctions } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructorFactory$WithFunctions.d.ts'
import type { JSFunctionObject } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSNonProxy } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSNonProxy.d.ts'
import type { PrototypeSupplier } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSDateTimeFormat$InternalState } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSDateTimeFormat$InternalState.d.ts'
import type { JSDateTimeFormatObject } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSDateTimeFormatObject.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Pair } from '../../../../../../../com/oracle/truffle/js/runtime/util/Pair.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DateFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormat.d.ts'
import type { TimeZone } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
export class JSDateTimeFormat extends JSNonProxy implements JSConstructorFactory$WithFunctions, PrototypeSupplier {
    static CLASS_NAME: TruffleString;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSDateTimeFormat;
    static PROTOTYPE_NAME: TruffleString;
    static TO_STRING_TAG: TruffleString;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static create(paramcontext: JSContext, paramrealm: JSRealm): JSDateTimeFormatObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject): JSDateTimeFormatObject;
    static createConstructor(paramrealm: JSRealm): JSConstructor;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static format(paramnumberFormatObj: JSDateTimeFormatObject, paramn: Object): TruffleString;
    static formatRange(paramdateTimeFormat: JSDateTimeFormatObject, paramstartDate: number, paramendDate: number): TruffleString;
    static formatRangeToParts(paramcontext: JSContext, paramrealm: JSRealm, paramdateTimeFormat: JSDateTimeFormatObject, paramstartDate: number, paramendDate: number): JSDynamicObject;
    static formatToParts(paramcontext: JSContext, paramrealm: JSRealm, paramnumberFormatObj: JSDateTimeFormatObject, paramn: Object, paramsource: string): JSDynamicObject;
    static getAvailableNamedTimeZoneIdentifier(paramtzId: string): Pair<string, string>;
    static getDateFormatProperty(paramobj: JSDateTimeFormatObject): DateFormat;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSDateTimeFormat(paramobj: Object): boolean;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static resolvedOptions(paramcontext: JSContext, paramrealm: JSRealm, paramdateTimeFormatObj: JSDateTimeFormatObject): JSObject;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static setupInternalDateTimeFormat(paramctx: JSContext, paramstate: JSDateTimeFormat$InternalState, paramlocales: string[], paramweekdayOpt: string, parameraOpt: string, paramyearOpt: string, parammonthOpt: string, paramdayOpt: string, paramdayPeriodOpt: string, paramhourOpt: string, paramhcOpt: string, paramhour12Opt: boolean, paramminuteOpt: string, paramsecondOpt: string, paramfractionalSecondDigitsOpt: number, paramtzNameOpt: string, paramtimeZone: TimeZone, paramtimeZoneId: string, paramcalendarOpt: string, paramnumberingSystemOpt: string, paramdateStyleOpt: string, paramtimeStyleOpt: string): void;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    private constructor()
    createConstructorAndPrototype(realm: JSRealm, functionBuiltins: JSBuiltinsContainer): JSConstructor;
    createPrototype(realm: JSRealm, ctor: JSFunctionObject): JSDynamicObject;
    getClassName(): TruffleString;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    makeInitialShape(ctx: JSContext, prototype: JSDynamicObject): Shape;
}