import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSClass extends Object {
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    constructor()
    defineOwnProperty(thisObj: JSDynamicObject, key: Object, value: PropertyDescriptor, doThrow: boolean): boolean;
    delete(thisObj: JSDynamicObject, key: Object, isStrict: boolean): boolean;
    delete(thisObj: JSDynamicObject, key: Object, isStrict: boolean, resultWhenNotPresent: boolean): boolean;
    delete(thisObj: JSDynamicObject, index: number, isStrict: boolean): boolean;
    delete(thisObj: JSDynamicObject, index: number, isStrict: boolean, resultWhenNotPresent: boolean): boolean;
    get(thisObj: JSDynamicObject, key: Object): Object;
    get(thisObj: JSDynamicObject, index: number): Object;
    getHelper(store: JSDynamicObject, thisObj: Object, key: Object, encapsulatingNode: Node): Object;
    getHelper(store: JSDynamicObject, thisObj: Object, index: number, encapsulatingNode: Node): Object;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    getMethodHelper(store: JSDynamicObject, thisObj: Object, key: Object, encapsulatingNode: Node): Object;
    getOwnHelper(store: JSDynamicObject, thisObj: Object, key: Object, encapsulatingNode: Node): Object;
    getOwnHelper(store: JSDynamicObject, thisObj: Object, index: number, encapsulatingNode: Node): Object;
    getOwnProperty(thisObj: JSDynamicObject, key: Object): PropertyDescriptor;
    getOwnPropertyKeys(obj: JSDynamicObject, strings: boolean, symbols: boolean): Object[];
    getPrototypeOf(thisObj: JSDynamicObject): JSDynamicObject;
    hasOnlyShapeProperties(obj: JSDynamicObject): boolean;
    hasOwnProperty(thisObj: JSDynamicObject, key: Object): boolean;
    hasOwnProperty(thisObj: JSDynamicObject, index: number): boolean;
    hasProperty(thisObj: JSDynamicObject, key: Object): boolean;
    hasProperty(thisObj: JSDynamicObject, index: number): boolean;
    isExtensible(thisObj: JSDynamicObject): boolean;
    isInstance(object: JSDynamicObject): boolean;
    isInstance(object: Object): boolean;
    makeInitialShape(context: JSContext, prototype: JSDynamicObject): Shape;
    ownPropertyKeys(obj: JSDynamicObject): Object[];
    preventExtensions(thisObj: JSDynamicObject, doThrow: boolean): boolean;
    set(thisObj: JSDynamicObject, key: Object, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    set(thisObj: JSDynamicObject, index: number, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    setPrototypeOf(thisObj: JSDynamicObject, newPrototype: JSDynamicObject): boolean;
    toString(): string;
    usesOrdinaryGetOwnProperty(): boolean;
    usesOrdinaryIsExtensible(): boolean;
}