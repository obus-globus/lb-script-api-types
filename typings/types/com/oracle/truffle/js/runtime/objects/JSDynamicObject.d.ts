import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ToDisplayStringFormat } from '../../../../../../com/oracle/truffle/js/runtime/ToDisplayStringFormat.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSSharedData } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSSharedData.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { IntUnaryOperator } from '../../../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSDynamicObject extends DynamicObject implements TruffleObject {
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
    constructor(shape: Shape)
    defaultToString(): TruffleString;
    defineOwnProperty(key: Object, value: PropertyDescriptor, doThrow: boolean): boolean;
    delete(key: Object, isStrict: boolean): boolean;
    delete(propIdx: number, isStrict: boolean): boolean;
    getBuiltinToStringTag(): TruffleString;
    getClassName(): TruffleString;
    getHelper(receiver: Object, key: Object, encapsulatingNode: Node): Object;
    getHelper(receiver: Object, index: number, encapsulatingNode: Node): Object;
    getJSClass(): JSClass;
    getJSContext(): JSContext;
    getMethodHelper(receiver: Object, key: Object, encapsulatingNode: Node): Object;
    getOwnHelper(receiver: Object, key: Object, encapsulatingNode: Node): Object;
    getOwnHelper(receiver: Object, index: number, encapsulatingNode: Node): Object;
    getOwnProperty(propertyKey: Object): PropertyDescriptor;
    getOwnPropertyKeys(strings: boolean, symbols: boolean): Object[];
    getPrototypeOf(): JSDynamicObject;
    getValue(key: Object): Object;
    getValue(index: number): Object;
    hasOnlyShapeProperties(): boolean;
    hasOwnProperty(propName: Object): boolean;
    hasOwnProperty(index: number): boolean;
    hasProperty(key: Object): boolean;
    hasProperty(index: number): boolean;
    identityHashCode(): number;
    isExtensible(): boolean;
    isObject(): boolean;
    ownPropertyKeys(): Object[];
    preventExtensions(doThrow: boolean): boolean;
    set(key: Object, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    set(index: number, value: Object, receiver: Object, isStrict: boolean, encapsulatingNode: Node): boolean;
    setIntegrityLevel(freeze: boolean, doThrow: boolean): boolean;
    setPrototypeOf(newPrototype: JSDynamicObject): boolean;
    testIntegrityLevel(frozen: boolean): boolean;
    toDisplayStringImpl(allowSideEffects: boolean, format: ToDisplayStringFormat, depth: number): TruffleString;
}