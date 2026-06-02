import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSNonProxy } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSNonProxy.d.ts'
import type { JavaPackageObject } from '../../../../../../com/oracle/truffle/js/runtime/java/JavaPackageObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JavaPackage extends JSNonProxy {
    static CLASS_NAME: TruffleString;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JavaPackage;
    static SYMBOL_TO_PRIMITIVE_NAME: TruffleString;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static create(paramcontext: JSContext, paramrealm: JSRealm, parampackageName: TruffleString): JavaPackageObject;
    static createInit(paramrealm: JSRealm, parampackageName: TruffleString): JavaPackageObject;
    static createToPrimitiveFunction(paramcontext: JSContext, paramrealm: JSRealm): JSFunctionObject;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static getJavaClassOrConstructorOrSubPackage(paramcontext: JSContext, paramthisObj: JSDynamicObject, paramname: TruffleString): Object;
    static getPackageName(paramobj: JSDynamicObject): TruffleString;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJavaPackage(paramobj: Object): boolean;
    static lookupClass(paramrealm: JSRealm, paramthisObj: JSDynamicObject, paramclassName: TruffleString): Object;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static subpackage(paramcontext: JSContext, paramrealm: JSRealm, paramthisObj: JSDynamicObject, paramname: TruffleString): JSDynamicObject;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    static toPrimitiveString(paramobj: JSDynamicObject): Object;
    private constructor()
    getHelper(store: JSDynamicObject, thisObj: Object, key: Object, encapsulatingNode: Node): Object;
    makeInitialShape(context: JSContext, objectPrototype: JSDynamicObject): Shape;
}