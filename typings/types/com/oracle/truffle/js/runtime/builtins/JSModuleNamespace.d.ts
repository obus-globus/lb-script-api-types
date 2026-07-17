import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSModuleNamespaceObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSModuleNamespaceObject.d.ts'
import type { JSNonProxy } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSNonProxy.d.ts'
import type { AbstractModuleRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/AbstractModuleRecord.d.ts'
import type { ExportResolution } from '../../../../../../com/oracle/truffle/js/runtime/objects/ExportResolution.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class JSModuleNamespace extends JSNonProxy {
    static DEFERRED_INSTANCE: JSModuleNamespace;
    static DEFERRED_TO_STRING_TAG: TruffleString;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSModuleNamespace;
    static TO_STRING_TAG: TruffleString;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static create(paramcontext: JSContext, paramrealm: JSRealm, parammodule: AbstractModuleRecord, paramsortedExports: Map$Entry<TruffleString, ExportResolution>[], paramdeferred: boolean): JSModuleNamespaceObject;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static getBindingValue(parambinding: ExportResolution): Object;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSModuleNamespace(paramobj: Object): boolean;
    static makeInitialShape(paramcontext: JSContext, paramdeferred: boolean): Shape;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    private constructor()
    defineOwnProperty(thisObj: JSDynamicObject, key: Object, desc: PropertyDescriptor, doThrow: boolean): boolean;
    delete(thisObj: JSDynamicObject, key: Object, isStrict: boolean): boolean;
    delete(thisObj: JSDynamicObject, key: Object, isStrict: boolean, resultWhenNotPresent: boolean): boolean;
    delete(thisObj: JSDynamicObject, index: number, isStrict: boolean): boolean;
    delete(thisObj: JSDynamicObject, index: number, isStrict: boolean, resultWhenNotPresent: boolean): boolean;
    getOwnHelper(store: JSDynamicObject, thisObj: Object, key: Object, encapsulatingNode: Node): Object;
    getOwnHelper(store: JSDynamicObject, thisObj: Object, index: number, encapsulatingNode: Node): Object;
    getOwnProperty(thisObj: JSDynamicObject, key: Object): PropertyDescriptor;
    getOwnPropertyKeys(thisObj: JSDynamicObject, strings: boolean, symbols: boolean): Object[];
    hasOwnProperty(thisObj: JSDynamicObject, key: Object): boolean;
    hasOwnProperty(thisObj: JSDynamicObject, index: number): boolean;
    hasProperty(thisObj: JSDynamicObject, key: Object): boolean;
    hasProperty(thisObj: JSDynamicObject, index: number): boolean;
    set(thisObj: JSDynamicObject, key: Object, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    set(thisObj: JSDynamicObject, index: number, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    setPrototypeOf(thisObj: JSDynamicObject, newPrototype: JSDynamicObject): boolean;
    usesOrdinaryGetOwnProperty(): boolean;
}