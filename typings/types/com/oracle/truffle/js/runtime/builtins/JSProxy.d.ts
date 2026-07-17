import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { AbstractJSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/AbstractJSClass.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructor } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSProxyObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSProxyObject.d.ts'
import type { PrototypeSupplier } from '../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSProxy extends AbstractJSClass implements PrototypeSupplier {
    static APPLY: TruffleString;
    static CLASS_NAME: TruffleString;
    static CONSTRUCT: TruffleString;
    static DEFINE_PROPERTY: TruffleString;
    static DELETE_PROPERTY: TruffleString;
    static GET: TruffleString;
    static GET_OWN_PROPERTY_DESCRIPTOR: TruffleString;
    static GET_PROTOTYPE_OF: TruffleString;
    static HAS: TruffleString;
    static INSTANCE: JSProxy;
    static IS_EXTENSIBLE: TruffleString;
    static OWN_KEYS: TruffleString;
    static PREVENT_EXTENSIONS: TruffleString;
    static PROXY_CALL: TruffleString;
    static REVOCABLE_PROXY: HiddenKey;
    static SET: TruffleString;
    static SET_PROTOTYPE_OF: TruffleString;
    static call(paramproxyObj: JSDynamicObject, paramholder: Object, paramarguments: Object[]): Object;
    static checkPropertyIsSettable(paramtruffleTarget: Object, paramkey: Object): boolean;
    static checkProxyDefinePropertyTrapInvariants(paramproxy: JSDynamicObject, paramkey: Object, paramdesc: PropertyDescriptor): boolean;
    static checkProxyGetTrapInvariants(paramtruffleTarget: Object, paramkey: Object, paramtrapResult: Object): void;
    static checkProxySetTrapInvariants(paramproxy: JSDynamicObject, paramkey: Object, paramvalue: Object): boolean;
    static checkTrapReturnValue(paramtrapResult: Object): Object;
    static construct(paramproxyObj: JSDynamicObject, paramarguments: Object[]): Object;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, paramtarget: Object, paramhandler: JSDynamicObject): JSProxyObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramtarget: Object, paramhandler: JSDynamicObject): JSProxyObject;
    static createConstructor(paramrealm: JSRealm): JSConstructor;
    static createProxyCallFunctionData(paramctx: JSContext): JSFunctionData;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static getHandler(paramobj: JSDynamicObject): JSDynamicObject;
    static getHandlerChecked(paramobj: JSDynamicObject, paramtrap: TruffleString): JSDynamicObject;
    static getTarget(paramobj: JSDynamicObject): Object;
    static getTargetNonProxy(paramthisObj: JSDynamicObject): Object;
    static getTrapFromObject(parammaybeHandler: JSDynamicObject, paramtrapName: TruffleString): Object;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSProxy(paramobj: Object): boolean;
    static isRevoked(paramproxy: JSDynamicObject): boolean;
    private constructor()
    defineOwnProperty(thisObj: JSDynamicObject, key: Object, desc: PropertyDescriptor, doThrow: boolean): boolean;
    delete(thisObj: JSDynamicObject, key: Object, isStrict: boolean): boolean;
    delete(thisObj: JSDynamicObject, key: Object, isStrict: boolean, resultWhenNotPresent: boolean): boolean;
    delete(thisObj: JSDynamicObject, index: number, isStrict: boolean): boolean;
    delete(thisObj: JSDynamicObject, index: number, isStrict: boolean, resultWhenNotPresent: boolean): boolean;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    getOwnHelper(store: JSDynamicObject, receiver: Object, key: Object, encapsulatingNode: Node): Object;
    getOwnHelper(store: JSDynamicObject, receiver: Object, index: number, encapsulatingNode: Node): Object;
    getOwnProperty(thisObj: JSDynamicObject, key: Object): PropertyDescriptor;
    getOwnPropertyKeys(thisObj: JSDynamicObject, strings: boolean, symbols: boolean): Object[];
    getPrototypeOf(thisObj: JSDynamicObject): JSDynamicObject;
    hasOwnProperty(thisObj: JSDynamicObject, key: Object): boolean;
    hasOwnProperty(thisObj: JSDynamicObject, index: number): boolean;
    hasProperty(thisObj: JSDynamicObject, key: Object): boolean;
    hasProperty(thisObj: JSDynamicObject, index: number): boolean;
    isExtensible(thisObj: JSDynamicObject): boolean;
    makeInitialShape(context: JSContext, prototype: JSDynamicObject): Shape;
    preventExtensions(thisObj: JSDynamicObject, doThrow: boolean): boolean;
    set(thisObj: JSDynamicObject, key: Object, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    set(thisObj: JSDynamicObject, index: number, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    setPrototypeOf(thisObj: JSDynamicObject, newPrototype: JSDynamicObject): boolean;
}