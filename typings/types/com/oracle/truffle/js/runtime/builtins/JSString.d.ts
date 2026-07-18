import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSBuiltinsContainer } from '../../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructor } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSConstructorFactory$WithFunctions } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructorFactory$WithFunctions.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSPrimitive } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPrimitive.d.ts'
import type { JSStringObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSStringObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSString extends JSPrimitive implements JSConstructorFactory$WithFunctions {
    static CLASS_NAME: TruffleString;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSString;
    static LENGTH: TruffleString;
    static PROTOTYPE_NAME: TruffleString;
    static REGEXP_ITERATOR_CLASS_NAME: TruffleString;
    static REGEXP_ITERATOR_DONE_ID: HiddenKey;
    static REGEXP_ITERATOR_GLOBAL_ID: HiddenKey;
    static REGEXP_ITERATOR_ITERATED_STRING_ID: HiddenKey;
    static REGEXP_ITERATOR_ITERATING_REGEXP_ID: HiddenKey;
    static REGEXP_ITERATOR_PROTOTYPE_NAME: TruffleString;
    static REGEXP_ITERATOR_UNICODE_ID: HiddenKey;
    static TRIM_END: TruffleString;
    static TRIM_LEFT: TruffleString;
    static TRIM_RIGHT: TruffleString;
    static TRIM_START: TruffleString;
    static TYPE_NAME: TruffleString;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramvalue: TruffleString): JSStringObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, paramvalue: TruffleString): JSStringObject;
    static createConstructor(paramrealm: JSRealm): JSConstructor;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static getString(paramobj: JSStringObject): TruffleString;
    static getString(paramobj: JSDynamicObject): TruffleString;
    static getStringLength(paramobj: JSDynamicObject): number;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSString(paramobj: Object): boolean;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static stringGetIndexProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    private constructor()
    createConstructorAndPrototype(realm: JSRealm, functionBuiltins: JSBuiltinsContainer): JSConstructor;
    createPrototype(realm: JSRealm, ctor: JSFunctionObject): JSDynamicObject;
    defineOwnProperty(thisObj: JSDynamicObject, key: Object, desc: PropertyDescriptor, doThrow: boolean): boolean;
    delete(thisObj: JSDynamicObject, key: Object, isStrict: boolean): boolean;
    delete(thisObj: JSDynamicObject, index: number, isStrict: boolean): boolean;
    getClassName(): TruffleString;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    getOwnHelper(store: JSDynamicObject, thisObj: Object, key: Object, encapsulatingNode: Node): Object;
    getOwnHelper(store: JSDynamicObject, thisObj: Object, index: number, encapsulatingNode: Node): Object;
    getOwnProperty(thisObj: JSDynamicObject, key: Object): PropertyDescriptor;
    getOwnPropertyKeys(thisObj: JSDynamicObject, strings: boolean, symbols: boolean): Object[];
    hasOwnProperty(thisObj: JSDynamicObject, key: Object): boolean;
    hasOwnProperty(thisObj: JSDynamicObject, index: number): boolean;
    makeInitialShape(context: JSContext, prototype: JSDynamicObject): Shape;
    set(thisObj: JSDynamicObject, key: Object, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    set(thisObj: JSDynamicObject, index: number, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    usesOrdinaryGetOwnProperty(): boolean;
}