import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSNonProxy } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSNonProxy.d.ts'
import type { JSObjectFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory.d.ts'
import type { PrototypeSupplier } from '../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { CompilableBiFunction } from '../../../../../../com/oracle/truffle/js/runtime/util/CompilableBiFunction.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSOrdinary extends JSNonProxy implements PrototypeSupplier {
    static BARE_INSTANCE: JSOrdinary;
    static BARE_SHAPE_SUPPLIER: (param0: JSContext, param1: JSDynamicObject) => Shape;
    static CLASS_NAME: TruffleString;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSOrdinary;
    static INTERNAL_FIELD_INSTANCE: JSOrdinary;
    static OVERLOADED_OPERATORS_INSTANCE: JSOrdinary;
    static PROTOTYPE_NAME: TruffleString;
    static SHAPE_SUPPLIER: (param0: JSContext, param1: JSDynamicObject) => Shape;
    static TYPE_NAME: TruffleString;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static create(paramcontext: JSContext, paramshape: Shape, paramproto: JSDynamicObject): JSObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm): JSObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject): JSObject;
    static create(paramcontext: JSContext, paramfactory: JSObjectFactory, paramrealm: JSRealm): JSObject;
    static create(paramfactory: JSObjectFactory, paramrealm: JSRealm, paramproto: JSDynamicObject): JSObject;
    static createInit(paramrealm: JSRealm): JSObject;
    static createInit(paramrealm: JSRealm, paramprototype: JSDynamicObject): JSObject;
    static createInitWithInstancePrototype(paramprototype: JSDynamicObject, paramcontext: JSContext): JSObject;
    static createWithNullPrototype(paramcontext: JSContext): JSObject;
    static createWithNullPrototypeInit(paramcontext: JSContext): JSObject;
    static createWithPrototype(paramprototype: JSDynamicObject, paramcontext: JSContext): JSObject;
    static createWithPrototype(paramprototype: JSDynamicObject, paramcontext: JSContext, paraminstanceLayout: JSOrdinary): JSObject;
    static createWithRealm(paramcontext: JSContext, paramfactory: JSObjectFactory, paramrealm: JSRealm): JSObject;
    static createWithoutPrototype(paramcontext: JSContext, paramproto: JSDynamicObject): JSObject;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSOrdinaryObject(paramobj: JSDynamicObject): boolean;
    static isJSOrdinaryObject(paramobj: Object): boolean;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    private constructor()
    get(thisObj: JSDynamicObject, key: Object): Object;
    get(thisObj: JSDynamicObject, index: number): Object;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    hasOnlyShapeProperties(obj: JSDynamicObject): boolean;
    makeInitialShape(context: JSContext, prototype: JSDynamicObject): Shape;
}