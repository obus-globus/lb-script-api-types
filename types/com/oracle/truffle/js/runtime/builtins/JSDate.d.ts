import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSBuiltinsContainer } from '../../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructor } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSConstructorFactory$WithFunctions } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructorFactory$WithFunctions.d.ts'
import type { JSDateObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSDateObject.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSNonProxy } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSNonProxy.d.ts'
import type { PrototypeSupplier } from '../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Instant } from '../../../../../../java/time/Instant.d.ts'
import type { LocalDate } from '../../../../../../java/time/LocalDate.d.ts'
import type { LocalTime } from '../../../../../../java/time/LocalTime.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DateFormat } from '../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormat.d.ts'
import type { TimeZone } from '../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZone.d.ts'
export class JSDate extends JSNonProxy implements JSConstructorFactory$WithFunctions, PrototypeSupplier {
    static CLASS_NAME: TruffleString;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSDate;
    static INVALID_DATE_STRING: TruffleString;
    static MAX_DATE: number;
    static MAX_YEAR_VALUE: number;
    static MIN_YEAR_VALUE: number;
    static MS_PER_DAY: number;
    static MS_PER_HOUR: number;
    static MS_PER_MINUTE: number;
    static MS_PER_SECOND: number;
    static PROTOTYPE_NAME: TruffleString;
    static asInstant(paramdate: JSDateObject): Instant;
    static asLocalDate(paramdate: JSDateObject, paramrealm: JSRealm): LocalDate;
    static asLocalTime(paramdate: JSDateObject, paramrealm: JSRealm): LocalTime;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, paramtimeMillis: number): JSDateObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramtimeMillis: number): JSDateObject;
    static createConstructor(paramrealm: JSRealm): JSConstructor;
    static dateFromDayInYear(paramyear: number, paramday: number): number;
    static dateFromTime(paramdt: number): number;
    static day(paramt: number): number;
    static dayFromYear(paramy: number): number;
    static executeConstructor(paramargsEvaluated: number[], paraminputIsUTC: boolean): number;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static format(paramformat: DateFormat, paramtime: number): TruffleString;
    static getDateValueFromInstant(paramreceiver: Object, paraminterop: InteropLibrary): number;
    static hourFromTime(paramt: number): number;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSDate(paramobj: Object): boolean;
    static isLeapYear(paramyear: number): boolean;
    static isTimeValid(paramtime: number): boolean;
    static isValidDate(paramdate: JSDateObject): boolean;
    static isoDateToEpochDays(paramyear: number, parammonth: number, paramdate: number): number;
    static localTZA(paramt: number, paramisUTC: boolean, paramtimeZone: TimeZone): number;
    static localTZA(paramt: number, paramisUTC: boolean, paramnode: Node): number;
    static localTime(paramt: number, paramnode: Node): number;
    static makeDate(paramday: number, paramtime: number): number;
    static makeDate(paramy: number, paramm: number, paramd: number, paramh: number, parammin: number, paramsec: number, paramms: number, paramtimezone: number): number;
    static makeDay(paramyear: number, parammonth: number, paramdate: number): number;
    static makeTime(paramhour: number, parammin: number, paramsec: number, paramms: number): number;
    static minFromTime(paramt: number): number;
    static monthFromTime(paramdt: number): number;
    static msFromTime(paramt: number): number;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static secFromTime(paramt: number): number;
    static setDate(paramtParam: number, paramdate: number, paramisUTC: boolean, paramnode: Node): number;
    static setFullYear(paramtParam: number, paramyear: number, parammonth: number, parammonthSpecified: boolean, paramdate: number, paramdateSpecified: boolean, paramisUTC: boolean, paramnode: Node): number;
    static setHours(paramtParam: number, paramh: number, paramm: number, parammSpecified: boolean, params: number, paramsSpecified: boolean, paramms: number, parammsSpecified: boolean, paramisUTC: boolean, paramnode: Node): number;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static setMilliseconds(paramtParam: number, paramms: number, paramisUTC: boolean, paramnode: Node): number;
    static setMinutes(paramtParam: number, paramm: number, params: number, paramsSpecified: boolean, paramms: number, parammsSpecified: boolean, paramisUTC: boolean, paramnode: Node): number;
    static setMonth(paramtParam: number, parammonth: number, paramdate: number, paramdateSpecified: boolean, paramisUTC: boolean, paramnode: Node): number;
    static setSeconds(paramtParam: number, params: number, paramms: number, parammsSpecified: boolean, paramisUTC: boolean, paramnode: Node): number;
    static setTime(paramthisDate: JSDateObject, paramtime: number): number;
    static setYear(paramtParam: number, paramyear: number, paramnode: Node): number;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    static timeClip(paramtime: number): number;
    static toISOStringIntl(paramtime: number, paramrealm: JSRealm): TruffleString;
    static toString(paramtime: number, paramrealm: JSRealm): TruffleString;
    static weekDay(paramt: number): number;
    static yearFromDays(paramdaysAfter1970: number): number;
    static yearFromTime(paramt: number): number;
    private constructor()
    createConstructorAndPrototype(realm: JSRealm, functionBuiltins: JSBuiltinsContainer): JSConstructor;
    createPrototype(realm: JSRealm, ctor: JSFunctionObject): JSDynamicObject;
    getClassName(): TruffleString;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    makeInitialShape(ctx: JSContext, prototype: JSDynamicObject): Shape;
}