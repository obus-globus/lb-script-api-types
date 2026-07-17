import type { AbstractTruffleException } from '../../../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Property } from '../../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructor } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSConstructorFactory$Default } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructorFactory$Default.d.ts'
import type { JSFunctionObject } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSNonProxy } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSNonProxy.d.ts'
import type { PrototypeSupplier } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSWebAssemblyExceptionObject } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/wasm/JSWebAssemblyExceptionObject.d.ts'
import type { JSWebAssemblyTagObject } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/wasm/JSWebAssemblyTagObject.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JSWebAssemblyException extends JSNonProxy implements JSConstructorFactory$Default, PrototypeSupplier {
    static CLASS_NAME: TruffleString;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSWebAssemblyException;
    static PROTOTYPE_NAME: TruffleString;
    static WEB_ASSEMBLY_EXCEPTION: TruffleString;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramwasmException: AbstractTruffleException, paramtype: JSWebAssemblyTagObject, parampayload: Object[]): JSWebAssemblyExceptionObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, paramwasmException: AbstractTruffleException, paramtype: JSWebAssemblyTagObject, parampayload: Object[]): JSWebAssemblyExceptionObject;
    static createConstructor(paramrealm: JSRealm): JSConstructor;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSWebAssemblyException(paramobject: Object): boolean;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    constructor()
    createConstructorAndPrototype(realm: JSRealm): JSConstructor;
    createPrototype(realm: JSRealm, constructor: JSFunctionObject): JSDynamicObject;
    getClassName(): TruffleString;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    makeInitialShape(ctx: JSContext, prototype: JSDynamicObject): Shape;
}