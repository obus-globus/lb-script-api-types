import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSAgentWaiterList } from '../../../../../../com/oracle/truffle/js/runtime/JSAgentWaiterList.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSAbstractBuffer } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSAbstractBuffer.d.ts'
import type { JSArrayBufferObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructor } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSConstructorFactory$Default$WithSpecies } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructorFactory$Default$WithSpecies.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { PrototypeSupplier } from '../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { AtomicInteger } from '../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSSharedArrayBuffer extends JSAbstractBuffer implements JSConstructorFactory$Default$WithSpecies, PrototypeSupplier {
    static CLASS_NAME: TruffleString;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSSharedArrayBuffer;
    static PROTOTYPE_NAME: TruffleString;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static createConstructor(paramrealm: JSRealm): JSConstructor;
    static createSharedArrayBuffer(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, parambyteLength: number, parammaxByteLength: number): JSArrayBufferObject;
    static createSharedArrayBuffer(paramcontext: JSContext, paramrealm: JSRealm, parambuffer: ByteBuffer): JSArrayBufferObject;
    static createSharedArrayBuffer(paramcontext: JSContext, paramrealm: JSRealm, parambuffer: ByteBuffer, parambyteLength: AtomicInteger, parammaxByteLength: number): JSArrayBufferObject;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static getDirectByteBuffer(paramthisObj: JSDynamicObject): ByteBuffer;
    static getWaiterList(paramthisObj: JSDynamicObject): JSAgentWaiterList;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSAbstractBuffer(paramobj: Object): boolean;
    static isJSSharedArrayBuffer(paramobj: Object): boolean;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static setWaiterList(paramthisObj: JSDynamicObject, paramwl: JSAgentWaiterList): void;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    private constructor()
    createPrototype(realm: JSRealm, ctor: JSFunctionObject): JSDynamicObject;
    fillConstructor(realm: JSRealm, constructor: JSDynamicObject): void;
    getClassName(): TruffleString;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    makeInitialShape(context: JSContext, prototype: JSDynamicObject): Shape;
}