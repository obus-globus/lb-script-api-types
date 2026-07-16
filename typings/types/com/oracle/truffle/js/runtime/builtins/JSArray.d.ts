import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { ArrayAllocationSite } from '../../../../../../com/oracle/truffle/js/runtime/array/ArrayAllocationSite.d.ts'
import type { DynamicArray } from '../../../../../../com/oracle/truffle/js/runtime/array/DynamicArray.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSAbstractArray } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSAbstractArray.d.ts'
import type { JSArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructor } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSConstructorFactory$WithFunctionsAndSpecies } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructorFactory$WithFunctionsAndSpecies.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { PrototypeSupplier } from '../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class JSArray extends JSAbstractArray implements JSConstructorFactory$WithFunctionsAndSpecies, PrototypeSupplier {
    static ARRAY_PROTOTYPE_NO_ELEMENTS_INVALIDATION: string;
    static CLASS_NAME: TruffleString;
    static DEFAULT_JSARRAY_COMPARATOR: (param0: Object, param1: Object) => number;
    static DEFAULT_JSARRAY_DOUBLE_COMPARATOR: (param0: Object, param1: Object) => number;
    static DEFAULT_JSARRAY_INTEGER_COMPARATOR: (param0: Object, param1: Object) => number;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSArray;
    static LAZY_REGEX_ORIGINAL_INPUT_ID: HiddenKey;
    static LAZY_REGEX_RESULT_ID: HiddenKey;
    static LENGTH: TruffleString;
    static PROTOTYPE_NAME: TruffleString;
    static arrayGetAllocationSite(paramthisObj: JSDynamicObject): ArrayAllocationSite;
    static arrayGetArray(paramthisObj: JSDynamicObject): Object;
    static arrayGetArrayOffset(paramthisObj: JSDynamicObject): number;
    static arrayGetArrayType(paramthisObj: JSDynamicObject): ScriptArray;
    static arrayGetHoleCount(paramthisObj: JSDynamicObject): number;
    static arrayGetIndexOffset(paramthisObj: JSDynamicObject): number;
    static arrayGetLength(paramthisObj: JSDynamicObject): number;
    static arrayGetRegexResult(paramthisObj: JSDynamicObject, paramlazyRegexResult: DynamicObjectLibrary): Object;
    static arrayGetRegexResultOriginalInput(paramthisObj: JSDynamicObject, paramlazyRegexResultOriginalInput: DynamicObjectLibrary): TruffleString;
    static arrayGetUsedLength(paramthisObj: JSDynamicObject): number;
    static arraySetArray(paramthisObj: JSDynamicObject, paramarray: Object): void;
    static arraySetArrayOffset(paramthisObj: JSDynamicObject, paramarrayOffset: number): void;
    static arraySetArrayType(paramthisObj: JSDynamicObject, paramarrayType: ScriptArray): void;
    static arraySetHoleCount(paramthisObj: JSDynamicObject, paramholeCount: number): void;
    static arraySetIndexOffset(paramthisObj: JSDynamicObject, paramindexOffset: number): void;
    static arraySetLength(paramthisObj: JSDynamicObject, paramlength: number): void;
    static arraySetUsedLength(paramthisObj: JSDynamicObject, paramusedLength: number): void;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramarrayType: DynamicArray, paramarray: Object, paramlength: number): JSArrayObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramarrayType: DynamicArray, paramarray: Object, paramlength: number, paramusedLength: number): JSArrayObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramarrayType: DynamicArray, paramarray: Object, paramlength: number, paramusedLength: number, paramindexOffset: number, paramarrayOffset: number): JSArrayObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramarrayType: DynamicArray, paramarray: Object, paramlength: number, paramusedLength: number, paramindexOffset: number, paramarrayOffset: number, paramholeCount: number): JSArrayObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, paramarrayType: DynamicArray, paramarray: Object, paramlength: number): JSArrayObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, paramarrayType: DynamicArray, paramarray: Object, paramlength: number, paramusedLength: number): JSArrayObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, paramarrayType: DynamicArray, paramarray: Object, paramlength: number, paramusedLength: number, paramindexOffset: number, paramarrayOffset: number): JSArrayObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, paramarrayType: DynamicArray, paramarray: Object, paramlength: number, paramusedLength: number, paramindexOffset: number, paramarrayOffset: number, paramholeCount: number): JSArrayObject;
    static createConstant(paramcontext: JSContext, paramrealm: JSRealm, paramelements: Object[]): JSArrayObject;
    static createConstantByteArray(paramcontext: JSContext, paramrealm: JSRealm, parambyteArray: number[]): JSArrayObject;
    static createConstantDoubleArray(paramcontext: JSContext, paramrealm: JSRealm, paramdoubleArray: number[]): JSArrayObject;
    static createConstantEmptyArray(paramcontext: JSContext, paramrealm: JSRealm): JSArrayObject;
    static createConstantEmptyArray(paramcontext: JSContext, paramrealm: JSRealm, paramprototype: JSDynamicObject, paramsite: ArrayAllocationSite): JSArrayObject;
    static createConstantEmptyArray(paramcontext: JSContext, paramrealm: JSRealm, paramprototype: JSDynamicObject, paramsite: ArrayAllocationSite, paramcapacity: number): JSArrayObject;
    static createConstantEmptyArray(paramcontext: JSContext, paramrealm: JSRealm, paramcapacity: number): JSArrayObject;
    static createConstantIntArray(paramcontext: JSContext, paramrealm: JSRealm, paramintArray: number[]): JSArrayObject;
    static createConstantObjectArray(paramcontext: JSContext, paramrealm: JSRealm, paramobjectArray: Object[]): JSArrayObject;
    static createConstructor(paramrealm: JSRealm): JSConstructor;
    static createDefaultProto(paramcontext: JSContext, paramrealm: JSRealm, paramarrayType: DynamicArray, paramarray: Object, paramsite: ArrayAllocationSite, paramlength: number, paramusedLength: number, paramindexOffset: number, paramarrayOffset: number, paramholeCount: number): JSArrayObject;
    static createEmpty(paramcontext: JSContext, paramrealm: JSRealm, paramlength: number): JSArrayObject;
    static createEmptyChecked(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, paramlength: number): JSArrayObject;
    static createEmptyChecked(paramcontext: JSContext, paramrealm: JSRealm, paramlength: number): JSArrayObject;
    static createEmptyZeroLength(paramcontext: JSContext, paramrealm: JSRealm): JSArrayObject;
    static createLazyArray(paramcontext: JSContext, paramrealm: JSRealm, paramlist: Object[], paramsize: number): JSArrayObject;
    static createLazyRegexArray(paramcontext: JSContext, paramrealm: JSRealm, paramlength: number): JSArrayObject;
    static createLazyRegexIndicesArray(paramcontext: JSContext, paramrealm: JSRealm, paramlength: number): JSArrayObject;
    static createSparseArray(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, paramlength: number): JSArrayObject;
    static createSparseArray(paramcontext: JSContext, paramrealm: JSRealm, paramlength: number): JSArrayObject;
    static createWithProto(paramcontext: JSContext, paramrealm: JSRealm, paramprototype: JSDynamicObject, paramarrayType: DynamicArray, paramarray: Object, paramsite: ArrayAllocationSite, paramlength: number, paramusedLength: number, paramindexOffset: number, paramarrayOffset: number, paramholeCount: number): JSArrayObject;
    static createZeroBasedDoubleArray(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, paramdoubleArray: number[]): JSArrayObject;
    static createZeroBasedDoubleArray(paramcontext: JSContext, paramrealm: JSRealm, paramdoubleArray: number[]): JSArrayObject;
    static createZeroBasedHolesObjectArray(paramcontext: JSContext, paramrealm: JSRealm, paramobjectArray: Object[], paramusedLength: number, paramarrayOffset: number, paramholeCount: number): JSArrayObject;
    static createZeroBasedIntArray(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, paramintArray: number[]): JSArrayObject;
    static createZeroBasedIntArray(paramcontext: JSContext, paramrealm: JSRealm, paramintArray: number[]): JSArrayObject;
    static createZeroBasedJSObjectArray(paramcontext: JSContext, paramrealm: JSRealm, paramobjectArray: JSDynamicObject[]): JSArrayObject;
    static createZeroBasedObjectArray(paramcontext: JSContext, paramrealm: JSRealm, paramobjectArray: Object[]): JSArrayObject;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static isArrayPrototype(paramobject: JSDynamicObject): boolean;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSArray(paramobj: Object): boolean;
    static isJSFastArray(paramobj: JSDynamicObject): boolean;
    static isJSFastArray(paramobj: Object): boolean;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyArray(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static setLength(paramstore: JSDynamicObject, paramvalue: Object, paramoriginatingNode: Node): boolean;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    static toArray(paramthisObj: JSDynamicObject): Object[];
    static toArrayLengthOrRangeError(paramlen: Number, paramlen32: Number, paramoriginatingNode: Node): number;
    static toArrayLengthOrRangeError(paramobj: Object, paramoriginatingNode: Node): number;
    private constructor()
    createPrototype(realm: JSRealm, ctor: JSFunctionObject): JSDynamicObject;
    fillConstructor(realm: JSRealm, constructor: JSDynamicObject): void;
    getClassName(): TruffleString;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    getOwnPropertyKeys(thisObj: JSDynamicObject, strings: boolean, symbols: boolean): Object[];
    makeInitialShape(context: JSContext, prototype: JSDynamicObject): Shape;
}