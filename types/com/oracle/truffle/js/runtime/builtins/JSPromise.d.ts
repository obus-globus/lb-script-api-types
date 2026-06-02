import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructor } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSConstructorFactory$WithFunctionsAndSpecies } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructorFactory$WithFunctionsAndSpecies.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSNonProxy } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSNonProxy.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { PrototypeSupplier } from '../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSPromise extends JSNonProxy implements JSConstructorFactory$WithFunctionsAndSpecies, PrototypeSupplier {
    static CLASS_NAME: TruffleString;
    static FULFILLED: number;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSPromise;
    static PENDING: number;
    static PROMISE_FINALLY_CONSTRUCTOR: HiddenKey;
    static PROMISE_ON_FINALLY: HiddenKey;
    static PROTOTYPE_NAME: TruffleString;
    static REJECTED: number;
    static REJECTION_TRACKER_OPERATION_HANDLE: number;
    static REJECTION_TRACKER_OPERATION_REJECT: number;
    static REJECTION_TRACKER_OPERATION_REJECT_AFTER_RESOLVED: number;
    static REJECTION_TRACKER_OPERATION_RESOLVE_AFTER_RESOLVED: number;
    static RESOLVE: TruffleString;
    static THEN: TruffleString;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static create(paramcontext: JSContext, paramshape: Shape, paramproto: JSDynamicObject): JSPromiseObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm): JSPromiseObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject): JSPromiseObject;
    static createConstructor(paramrealm: JSRealm): JSConstructor;
    static createWithoutPrototype(paramcontext: JSContext, paramproto: JSDynamicObject): JSPromiseObject;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static getPromiseResult(paramobj: JSPromiseObject): Object;
    static getPromiseState(parampromise: JSPromiseObject): number;
    static getStatus(paramobj: JSPromiseObject): TruffleString;
    static isFulfilled(parampromise: JSPromiseObject): boolean;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSPromise(paramobj: Object): boolean;
    static isPending(parampromise: JSPromiseObject): boolean;
    static isRejected(parampromise: JSPromiseObject): boolean;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static setPromiseState(parampromise: JSPromiseObject, parampromiseState: number): void;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    static throwIfRejected(parampromise: JSPromiseObject, paramrealm: JSRealm): void;
    private constructor()
    createPrototype(realm: JSRealm, constructor: JSFunctionObject): JSDynamicObject;
    fillConstructor(realm: JSRealm, constructor: JSDynamicObject): void;
    getClassName(): TruffleString;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    makeInitialShape(context: JSContext, prototype: JSDynamicObject): Shape;
}