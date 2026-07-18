import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptLanguage } from '../../../../../../com/oracle/truffle/js/lang/JavaScriptLanguage.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { JSToPrimitiveNode$Hint } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode$Hint.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ScriptArray } from '../../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSNonProxyObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSNonProxyObject.d.ts'
import type { JSSharedData } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSSharedData.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { IntUnaryOperator } from '../../../../../../java/util/function/IntUnaryOperator.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSTextEncoderObject extends JSNonProxyObject {
    static CONSTRUCTOR: TruffleString;
    static GET_PROTO_NAME: TruffleString;
    static HIDDEN_PROTO: HiddenKey;
    static NO_SUCH_METHOD_NAME: TruffleString;
    static NO_SUCH_PROPERTY_NAME: TruffleString;
    static PROTO: TruffleString;
    static PROTOTYPE: TruffleString;
    static SET_PROTO_NAME: TruffleString;
    static defaultToString(paramobj: JSDynamicObject): TruffleString;
    static defineOwnProperty(paramobj: JSDynamicObject, paramkey: Object, paramdesc: PropertyDescriptor): boolean;
    static defineOwnProperty(paramobj: JSDynamicObject, paramkey: Object, paramdesc: PropertyDescriptor, paramdoThrow: boolean): boolean;
    static delete(paramobj: JSDynamicObject, paramkey: Object): boolean;
    static delete(paramobj: JSDynamicObject, paramkey: Object, paramisStrict: boolean): boolean;
    static delete(paramobj: JSDynamicObject, paramkey: Object, paramisStrict: boolean, paramclassProfile: JSClassProfile): boolean;
    static delete(paramobj: JSDynamicObject, paramindex: number): boolean;
    static delete(paramobj: JSDynamicObject, paramindex: number, paramisStrict: boolean): boolean;
    static delete(paramobj: JSDynamicObject, paramindex: number, paramisStrict: boolean, paramclassProfile: JSClassProfile): boolean;
    static enumerableOwnNames(paramthisObj: JSDynamicObject): TruffleString[];
    static get(paramobj: JSDynamicObject, paramkey: Object): Object;
    static get(paramobj: JSDynamicObject, paramkey: Object, paramjsclassProfile: JSClassProfile): Object;
    static get(paramobj: JSDynamicObject, paramindex: number): Object;
    static get(paramobj: JSDynamicObject, paramindex: number, paramjsclassProfile: JSClassProfile): Object;
    static getArray(paramobj: JSDynamicObject): ScriptArray;
    static getClassName(paramobj: JSDynamicObject): TruffleString;
    static getDynamicType(paramobj: JSDynamicObject): Object;
    static getJSClass(paramobj: JSDynamicObject): JSClass;
    static getJSContext(paramobj: JSDynamicObject): JSContext;
    static getJSSharedData(paramobj: JSDynamicObject): JSSharedData;
    static getMethod(paramobj: JSDynamicObject, paramname: Object): Object;
    static getMethod(paramobj: JSDynamicObject, paramreceiver: Object, paramname: Object): Object;
    static getObjectFlags(paramobj: JSDynamicObject): number;
    static getOrDefault(paramobj: JSDynamicObject, paramkey: Object, paramdefaultValue: Object): Object;
    static getOrDefault(paramobj: JSDynamicObject, paramkey: Object, paramreceiver: Object, paramdefaultValue: Object): Object;
    static getOrDefault(paramobj: JSDynamicObject, paramkey: Object, paramreceiver: Object, paramdefaultValue: Object, paramjsclassProfile: JSClassProfile, paramencapsulatingNode: Node): Object;
    static getOrDefault(paramobj: JSDynamicObject, paramindex: number, paramreceiver: Object, paramdefaultValue: Object): Object;
    static getOrDefault(paramobj: JSDynamicObject, paramindex: number, paramreceiver: Object, paramdefaultValue: Object, paramjsclassProfile: JSClassProfile, paramencapsulatingNode: Node): Object;
    static getOrNull(paramobj: JSDynamicObject, paramkey: Object): Object;
    static getOwnProperty(paramobj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static getOwnProperty(paramobj: JSDynamicObject, paramkey: Object, paramclassProfile: JSClassProfile): PropertyDescriptor;
    static getPropertyArray(paramobj: JSDynamicObject): Property[];
    static getPropertyFlags(paramobj: JSDynamicObject, paramkey: Object): number;
    static getPrototype(paramobj: JSDynamicObject): JSDynamicObject;
    static getPrototype(paramobj: JSDynamicObject, paramjsclassProfile: JSClassProfile): JSDynamicObject;
    static getUncachedRead(): ReadElementNode;
    static getUncachedWrite(): WriteElementNode;
    static getWithReceiver(paramobj: JSDynamicObject, paramkey: Object, paramreceiver: Object, paramencapsulatingNode: Node): Object;
    static hasArray(paramobj: Object): boolean;
    static hasOwnProperty(paramobj: JSDynamicObject, paramkey: Object): boolean;
    static hasOwnProperty(paramobj: JSDynamicObject, paramkey: Object, paramclassProfile: JSClassProfile): boolean;
    static hasOwnProperty(paramobj: JSDynamicObject, paramindex: number): boolean;
    static hasOwnProperty(paramobj: JSDynamicObject, paramindex: number, paramclassProfile: JSClassProfile): boolean;
    static hasProperty(paramobj: JSDynamicObject, paramkey: Object): boolean;
    static hasProperty(paramobj: JSDynamicObject, paramkey: Object, paramclassProfile: JSClassProfile): boolean;
    static hasProperty(paramobj: JSDynamicObject, paramindex: number): boolean;
    static hasProperty(paramobj: JSDynamicObject, paramindex: number, paramclassProfile: JSClassProfile): boolean;
    static isExtensible(paramobj: JSDynamicObject): boolean;
    static isExtensible(paramobj: JSDynamicObject, paramclassProfile: JSClassProfile): boolean;
    static isJSDynamicObject(paramobject: Object): boolean;
    static isJSObject(paramobject: Object): boolean;
    static language(paramnode: InteropLibrary): JavaScriptLanguage;
    static ordinaryToPrimitive(paramobj: JSDynamicObject, paramhint: JSToPrimitiveNode$Hint): Object;
    static ownPropertyKeys(paramobj: JSDynamicObject): Object[];
    static ownPropertyKeys(paramobj: JSDynamicObject, paramclassProfile: JSClassProfile): Object[];
    static set(paramobj: JSDynamicObject, paramkey: Object, paramvalue: Object): boolean;
    static set(paramobj: JSDynamicObject, paramkey: Object, paramvalue: Object, paramisStrict: boolean, paramencapsulatingNode: Node): boolean;
    static set(paramobj: JSDynamicObject, paramindex: number, paramvalue: Object): boolean;
    static set(paramobj: JSDynamicObject, paramindex: number, paramvalue: Object, paramisStrict: boolean, paramencapsulatingNode: Node): boolean;
    static setArray(paramobj: JSDynamicObject, paramarray: ScriptArray): void;
    static setJSClass(paramobj: JSDynamicObject, paramjsclass: JSClass): void;
    static setObjectFlags(paramobj: JSDynamicObject, paramflags: number): void;
    static setPropertyFlags(paramobj: JSDynamicObject, paramkey: Object, paramflags: number): void;
    static setPrototype(paramobj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static setPrototype(paramobj: JSDynamicObject, paramnewPrototype: JSDynamicObject, paramjsclassProfile: JSClassProfile): boolean;
    static setWithReceiver(paramobj: JSDynamicObject, paramkey: Object, paramvalue: Object, paramreceiver: Object, paramisStrict: boolean, paramclassProfile: JSClassProfile, paramencapsulatingNode: Node): boolean;
    static setWithReceiver(paramobj: JSDynamicObject, paramindex: number, paramvalue: Object, paramreceiver: Object, paramisStrict: boolean, paramclassProfile: JSClassProfile, paramencapsulatingNode: Node): boolean;
    static testProperties(paramobj: JSDynamicObject, parampredicate: (param0: Property) => boolean): boolean;
    static toPrimitive(paramobj: JSDynamicObject): Object;
    static toPrimitive(paramobj: JSDynamicObject, paramhint: JSToPrimitiveNode$Hint): Object;
    static updatePropertyFlags(paramobj: JSDynamicObject, paramkey: Object, paramupdateFunction: (param0: number) => number): boolean;
    constructor(shape: Shape, proto: JSDynamicObject)
}