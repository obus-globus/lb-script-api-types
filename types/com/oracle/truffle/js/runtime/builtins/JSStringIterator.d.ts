import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructorFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructorFactory.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSNonProxy } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSNonProxy.d.ts'
import type { JSStringIteratorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSStringIteratorObject.d.ts'
import type { PrototypeSupplier } from '../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSStringIterator extends JSNonProxy implements JSConstructorFactory, PrototypeSupplier {
    static CLASS_NAME: TruffleString;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSStringIterator;
    static PROTOTYPE_NAME: TruffleString;
    static TO_STRING_TAG: TruffleString;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramiteratedString: TruffleString, paramnextIndex: number): JSStringIteratorObject;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    private constructor()
    createConstructorObject(realm: JSRealm): JSFunctionObject;
    createPrototype(realm: JSRealm, ctor: JSFunctionObject): JSDynamicObject;
    fillConstructor(realm: JSRealm, constructor: JSDynamicObject): void;
    getClassName(): TruffleString;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    makeInitialShape(context: JSContext, prototype: JSDynamicObject): Shape;
}