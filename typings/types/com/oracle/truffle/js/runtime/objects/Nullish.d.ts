import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ToDisplayStringFormat } from '../../../../../../com/oracle/truffle/js/runtime/ToDisplayStringFormat.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSSharedData } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSSharedData.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { IntUnaryOperator } from '../../../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Nullish extends JSDynamicObject {
    static getDynamicType(paramobj: JSDynamicObject): Object;
    static getJSSharedData(paramobj: JSDynamicObject): JSSharedData;
    static getObjectFlags(paramobj: JSDynamicObject): number;
    static getOrDefault(paramobj: JSDynamicObject, paramkey: Object, paramdefaultValue: Object): Object;
    static getOrNull(paramobj: JSDynamicObject, paramkey: Object): Object;
    static getPropertyArray(paramobj: JSDynamicObject): Property[];
    static getPropertyFlags(paramobj: JSDynamicObject, paramkey: Object, paramdefaultValue: number): number;
    static isJSDynamicObject(paramobject: Object): boolean;
    static setJSClass(paramobj: JSDynamicObject, paramjsclass: JSClass): void;
    static setObjectFlags(paramobj: JSDynamicObject, paramflags: number): void;
    static setPropertyFlags(paramobj: JSDynamicObject, paramkey: Object, paramflags: number): void;
    static testProperties(paramobj: JSDynamicObject, parampredicate: (param0: Property) => boolean): boolean;
    static updatePropertyFlags(paramobj: JSDynamicObject, paramkey: Object, paramupdateFunction: (param0: number) => number): boolean;
    constructor()
    defaultToString(): TruffleString;
    defineOwnProperty(key: Object, desc: PropertyDescriptor, doThrow: boolean): boolean;
    delete(index: Object, isStrict: boolean): boolean;
    delete(index: number, isStrict: boolean): boolean;
    getBuiltinToStringTag(): TruffleString;
    getClassName(): TruffleString;
    getHelper(thisObj: Object, name: Object, encapsulatingNode: Node): Object;
    getHelper(thisObj: Object, index: number, encapsulatingNode: Node): Object;
    getLanguageId(): string;
    getMetaObject(): Object;
    getMethodHelper(thisObj: Object, name: Object, encapsulatingNode: Node): Object;
    getOwnHelper(thisObj: Object, name: Object, encapsulatingNode: Node): Object;
    getOwnHelper(thisObj: Object, index: number, encapsulatingNode: Node): Object;
    getOwnProperty(propertyKey: Object): PropertyDescriptor;
    getOwnPropertyKeys(string: boolean, symbols: boolean): Object[];
    getPrototypeOf(): JSDynamicObject;
    hasLanguageId(): boolean;
    hasMetaObject(): boolean;
    hasOnlyShapeProperties(): boolean;
    hasOwnProperty(propName: Object): boolean;
    hasOwnProperty(propIdx: number): boolean;
    hasProperty(propName: Object): boolean;
    hasProperty(propIdx: number): boolean;
    isExtensible(): boolean;
    isNull(): boolean;
    isObject(): boolean;
    preventExtensions(doThrow: boolean): boolean;
    set(key: Object, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    set(index: number, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    setIntegrityLevel(freeze: boolean, doThrow: boolean): boolean;
    setPrototypeOf(newPrototype: JSDynamicObject): boolean;
    testIntegrityLevel(frozen: boolean): boolean;
    toDisplayString(allowSideEffects: boolean): Object;
    toDisplayStringImpl(allowSideEffects: boolean, format: ToDisplayStringFormat, depth: number): TruffleString;
    toString(): string;
}