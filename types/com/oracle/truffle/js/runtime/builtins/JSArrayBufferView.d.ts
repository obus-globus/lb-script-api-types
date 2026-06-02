import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { TypedArray } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { TypedArrayFactory } from '../../../../../../com/oracle/truffle/js/runtime/array/TypedArrayFactory.d.ts'
import type { JSArrayBufferObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructor } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSNonProxy } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSNonProxy.d.ts'
import type { JSObjectFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory.d.ts'
import type { JSTypedArrayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class JSArrayBufferView extends JSNonProxy {
    static CLASS_NAME: TruffleString;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSArrayBufferView;
    static PROTOTYPE_NAME: TruffleString;
    static UINT8ARRAY_CONSTRUCTOR_NAME: TruffleString;
    static UINT8ARRAY_PROTOTYPE_NAME: TruffleString;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static createArrayBufferView(paramcontext: JSContext, paramrealm: JSRealm, paramarrayBuffer: JSArrayBufferObject, paramtypedArrayFactory: TypedArrayFactory, paramarrayType: TypedArray, paramoffset: number, paramlength: number): JSTypedArrayObject;
    static createArrayBufferView(paramobjectFactory: JSObjectFactory, paramrealm: JSRealm, paramarrayBuffer: JSArrayBufferObject, paramarrayType: TypedArray, paramoffset: number, paramlength: number): JSTypedArrayObject;
    static createArrayBufferViewWithProto(paramobjectFactory: JSObjectFactory, paramrealm: JSRealm, paramarrayBuffer: JSArrayBufferObject, paramarrayType: TypedArray, paramoffset: number, paramlength: number, paramprototype: JSDynamicObject): JSTypedArrayObject;
    static createConstructor(paramrealm: JSRealm, paramfactory: TypedArrayFactory, paramtaConstructor: JSConstructor): JSConstructor;
    static createTypedArrayConstructor(paramrealm: JSRealm): JSConstructor;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static getArrayBuffer(paramthisObj: JSDynamicObject): JSArrayBufferObject;
    static getByteLength(paramstore: JSDynamicObject, paramctx: JSContext): number;
    static getByteOffset(paramstore: JSDynamicObject, paramctx: JSContext): number;
    static hasDetachedBuffer(paramctx: JSContext, paramtypedArray: JSTypedArrayObject): boolean;
    static isBigIntArrayBufferView(paramobj: JSDynamicObject): boolean;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSArrayBufferView(paramobj: Object): boolean;
    static isOutOfBounds(paramtypedArray: JSTypedArrayObject, paramctx: JSContext): boolean;
    static isValidIntegerIndex(paramthisObj: JSDynamicObject, paramnumericIndex: Number): boolean;
    static makeInitialArrayBufferViewShape(paramctx: JSContext, paramprototype: JSDynamicObject): Shape;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    static typedArrayGetArrayType(paramthisObj: JSDynamicObject): TypedArray;
    static typedArrayGetByteOffset(paramthisObj: JSDynamicObject): number;
    static typedArrayGetLength(paramthisObj: JSDynamicObject): number;
    static typedArrayGetName(paramthisObj: JSDynamicObject): TruffleString;
    private constructor()
    defineOwnProperty(thisObj: JSDynamicObject, key: Object, descriptor: PropertyDescriptor, doThrow: boolean): boolean;
    delete(thisObj: JSDynamicObject, key: Object, isStrict: boolean): boolean;
    getHelper(store: JSDynamicObject, receiver: Object, key: Object, encapsulatingNode: Node): Object;
    getHelper(store: JSDynamicObject, receiver: Object, index: number, encapsulatingNode: Node): Object;
    getOwnHelper(store: JSDynamicObject, receiver: Object, key: Object, encapsulatingNode: Node): Object;
    getOwnHelper(store: JSDynamicObject, receiver: Object, index: number, encapsulatingNode: Node): Object;
    getOwnProperty(thisObj: JSDynamicObject, key: Object): PropertyDescriptor;
    getOwnPropertyKeys(thisObj: JSDynamicObject, strings: boolean, symbols: boolean): Object[];
    hasOwnProperty(thisObj: JSDynamicObject, key: Object): boolean;
    hasOwnProperty(thisObj: JSDynamicObject, index: number): boolean;
    hasProperty(thisObj: JSDynamicObject, key: Object): boolean;
    hasProperty(thisObj: JSDynamicObject, index: number): boolean;
    set(thisObj: JSDynamicObject, key: Object, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    set(thisObj: JSDynamicObject, index: number, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    usesOrdinaryGetOwnProperty(): boolean;
}