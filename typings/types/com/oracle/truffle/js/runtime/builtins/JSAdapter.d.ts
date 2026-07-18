import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { AbstractJSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/AbstractJSClass.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructor } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSConstructorFactory$Default } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructorFactory$Default.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { PrototypeSupplier } from '../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSAdapter extends AbstractJSClass implements JSConstructorFactory$Default, PrototypeSupplier {
    static CLASS_NAME: TruffleString;
    static GET_IDS: TruffleString;
    static GET_VALUES: TruffleString;
    static INSTANCE: JSAdapter;
    static NEW: TruffleString;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramadaptee: JSDynamicObject, paramoverrides: JSDynamicObject, paramprotoOpt: JSDynamicObject): JSObject;
    static createConstructor(paramrealm: JSRealm): JSConstructor;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static getAdaptee(paramobj: JSDynamicObject): JSDynamicObject;
    static getOverrides(paramobj: JSDynamicObject): JSDynamicObject;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSAdapter(paramobj: Object): boolean;
    private constructor()
    createConstructorAndPrototype(realm: JSRealm): JSConstructor;
    createPrototype(realm: JSRealm, ctor: JSFunctionObject): JSDynamicObject;
    defineOwnProperty(thisObj: JSDynamicObject, key: Object, desc: PropertyDescriptor, doThrow: boolean): boolean;
    delete(thisObj: JSDynamicObject, key: Object, isStrict: boolean): boolean;
    delete(thisObj: JSDynamicObject, index: number, isStrict: boolean): boolean;
    getClassName(): TruffleString;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    getMethodHelper(store: JSDynamicObject, thisObj: Object, key: Object, encapsulatingNode: Node): Object;
    getOwnHelper(store: JSDynamicObject, thisObj: Object, key: Object, encapsulatingNode: Node): Object;
    getOwnHelper(store: JSDynamicObject, thisObj: Object, index: number, encapsulatingNode: Node): Object;
    getOwnProperty(thisObj: JSDynamicObject, key: Object): PropertyDescriptor;
    getOwnPropertyKeys(thisObj: JSDynamicObject, strings: boolean, symbols: boolean): Object[];
    getPrototypeOf(thisObj: JSDynamicObject): JSDynamicObject;
    hasOwnProperty(thisObj: JSDynamicObject, key: Object): boolean;
    hasOwnProperty(thisObj: JSDynamicObject, index: number): boolean;
    isExtensible(thisObj: JSDynamicObject): boolean;
    makeInitialShape(context: JSContext, prototype: JSDynamicObject): Shape;
    preventExtensions(thisObj: JSDynamicObject, doThrow: boolean): boolean;
    set(thisObj: JSDynamicObject, key: Object, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    set(thisObj: JSDynamicObject, index: number, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    setPrototypeOf(thisObj: JSDynamicObject, newPrototype: JSDynamicObject): boolean;
}