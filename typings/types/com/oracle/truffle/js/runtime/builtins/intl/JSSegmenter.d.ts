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
import type { JSSegmentIteratorObject } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSSegmentIteratorObject.d.ts'
import type { JSSegmenter$Granularity } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSSegmenter$Granularity.d.ts'
import type { JSSegmenter$InternalState } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSSegmenter$InternalState.d.ts'
import type { JSSegmenterObject } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSSegmenterObject.d.ts'
import type { JSSegmentsObject } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/intl/JSSegmentsObject.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BreakIterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/BreakIterator.d.ts'
export class JSSegmenter extends JSNonProxy implements JSConstructorFactory$WithFunctions, PrototypeSupplier {
    static CLASS_NAME: TruffleString;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSSegmenter;
    static ITERATOR_CLASS_NAME: TruffleString;
    static ITERATOR_PROTOTYPE_NAME: TruffleString;
    static PROTOTYPE_NAME: TruffleString;
    static SEGMENTS_PROTOTYPE_NAME: TruffleString;
    static TO_STRING_TAG: TruffleString;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject): JSSegmenterObject;
    static createBreakIterator(paramsegmenterObj: JSSegmenterObject): BreakIterator;
    static createBreakIterator(paramsegmenterObj: JSSegmenterObject, paramtext: string): BreakIterator;
    static createConstructor(paramrealm: JSRealm): JSConstructor;
    static createSegmentIterator(paramcontext: JSContext, paramrealm: JSRealm, paramsegmenter: JSSegmenterObject, paramvalue: TruffleString): JSSegmentIteratorObject;
    static createSegmentIteratorPrototype(paramrealm: JSRealm): JSObject;
    static createSegments(paramcontext: JSContext, paramrealm: JSRealm, paramsegmenter: JSSegmenterObject, paramstring: TruffleString): JSSegmentsObject;
    static createSegmentsPrototype(paramrealm: JSRealm): JSObject;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static getGranularity(paramsegmenterObj: JSSegmenterObject): JSSegmenter$Granularity;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSSegmentIterator(paramobj: Object): boolean;
    static isJSSegmenter(paramobj: Object): boolean;
    static isJSSegments(paramobj: Object): boolean;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static resolvedOptions(paramcontext: JSContext, paramrealm: JSRealm, paramsegmenterObj: JSSegmenterObject): JSObject;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static setLocale(paramctx: JSContext, paramstate: JSSegmenter$InternalState, paramlocales: string[]): void;
    static setupInternalBreakIterator(paramstate: JSSegmenter$InternalState, paramgranularity: string): void;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    private constructor()
    createConstructorAndPrototype(realm: JSRealm, functionBuiltins: JSBuiltinsContainer): JSConstructor;
    createPrototype(realm: JSRealm, ctor: JSFunctionObject): JSDynamicObject;
    getClassName(): TruffleString;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    makeInitialShape(ctx: JSContext, prototype: JSDynamicObject): Shape;
}