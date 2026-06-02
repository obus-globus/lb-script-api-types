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
import type { JSDurationFormat$InternalState } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSDurationFormat$InternalState.d.ts'
import type { JSDurationFormatObject } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSDurationFormatObject.d.ts'
import type { JSTemporalDurationRecord } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDurationRecord.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FormattedNumber } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/number/FormattedNumber.d.ts'
import type { MeasureUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
export class JSDurationFormat extends JSNonProxy implements JSConstructorFactory$WithFunctions, PrototypeSupplier {
    static CLASS_NAME: TruffleString;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSDurationFormat;
    static PROTOTYPE_NAME: TruffleString;
    static TO_STRING_TAG: TruffleString;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject): JSDurationFormatObject;
    static createConstructor(paramrealm: JSRealm): JSConstructor;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static format(paramstate: JSDurationFormat$InternalState, paramduration: JSTemporalDurationRecord): string;
    static formatToParts(paramcontext: JSContext, paramrealm: JSRealm, paramstate: JSDurationFormat$InternalState, paramduration: JSTemporalDurationRecord): Object;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static resolvedOptions(paramcontext: JSContext, paramrealm: JSRealm, paramdurationFormat: JSDurationFormatObject): JSObject;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    static toFormattedNumbers(paramstate: JSDurationFormat$InternalState, paramduration: JSTemporalDurationRecord, paramunits: MeasureUnit[]): FormattedNumber[];
    private constructor()
    createConstructorAndPrototype(realm: JSRealm, functionBuiltins: JSBuiltinsContainer): JSConstructor;
    createPrototype(realm: JSRealm, ctor: JSFunctionObject): JSDynamicObject;
    getClassName(): TruffleString;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    makeInitialShape(ctx: JSContext, prototype: JSDynamicObject): Shape;
}