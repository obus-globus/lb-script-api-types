import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSAbstractBuffer } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSAbstractBuffer.d.ts'
import type { JSArrayBufferObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSArrayBufferObject$Interop } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Interop.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructor } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSConstructorFactory$WithFunctionsAndSpecies } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructorFactory$WithFunctionsAndSpecies.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { PrototypeSupplier } from '../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSArrayBuffer extends JSAbstractBuffer implements JSConstructorFactory$WithFunctionsAndSpecies, PrototypeSupplier {
    static CLASS_NAME: TruffleString;
    static DIRECT_INSTANCE: JSArrayBuffer;
    static FIXED_LENGTH: number;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static HEAP_INSTANCE: JSArrayBuffer;
    static INTEROP_INSTANCE: JSArrayBuffer;
    static PROTOTYPE_NAME: TruffleString;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static createArrayBuffer(paramcontext: JSContext, paramrealm: JSRealm, parambyteArray: number[]): JSArrayBufferObject;
    static createArrayBuffer(paramcontext: JSContext, paramrealm: JSRealm, parambyteArray: number[], parambyteLength: number, parammaxByteLength: number): JSArrayBufferObject;
    static createArrayBuffer(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, parambyteLength: number, parammaxByteLength: number): JSArrayBufferObject;
    static createArrayBuffer(paramcontext: JSContext, paramrealm: JSRealm, paramlength: number): JSArrayBufferObject;
    static createConstructor(paramrealm: JSRealm): JSConstructor;
    static createDirectArrayBuffer(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, parambyteLength: number, parammaxByteLength: number): JSArrayBufferObject;
    static createDirectArrayBuffer(paramcontext: JSContext, paramrealm: JSRealm, paramlength: number): JSArrayBufferObject;
    static createDirectArrayBuffer(paramcontext: JSContext, paramrealm: JSRealm, parambuffer: ByteBuffer): JSArrayBufferObject;
    static createDirectArrayBuffer(paramcontext: JSContext, paramrealm: JSRealm, parambuffer: ByteBuffer, parambyteLength: number, parammaxByteLength: number): JSArrayBufferObject;
    static createInteropArrayBuffer(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, parambuffer: Object): JSArrayBufferObject$Interop;
    static createInteropArrayBuffer(paramcontext: JSContext, paramrealm: JSRealm, parambuffer: Object): JSArrayBufferObject$Interop;
    static detachArrayBuffer(paramarrayBuffer: JSArrayBufferObject): void;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static getByteArray(paramthisObj: Object): number[];
    static getDirectByteBuffer(paramthisObj: Object): ByteBuffer;
    static getInteropBuffer(paramthisObj: Object): Object;
    static isDetachedBuffer(paramarrayBuffer: JSArrayBufferObject): boolean;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSAbstractBuffer(paramobj: Object): boolean;
    static isJSDirectArrayBuffer(paramobj: Object): boolean;
    static isJSDirectOrSharedArrayBuffer(paramobj: Object): boolean;
    static isJSHeapArrayBuffer(paramobj: Object): boolean;
    static isJSInteropArrayBuffer(paramobj: Object): boolean;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    private constructor()
    createPrototype(realm: JSRealm, ctor: JSFunctionObject): JSDynamicObject;
    fillConstructor(realm: JSRealm, constructor: JSDynamicObject): void;
    getClassName(): TruffleString;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    makeInitialShape(context: JSContext, prototype: JSDynamicObject): Shape;
}