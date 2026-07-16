import type { Assumption } from '../../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Shape$Builder } from '../../../../../../com/oracle/truffle/api/object/Shape$Builder.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSSharedData } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSSharedData.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSShape extends Object {
    static ARRAY_PROTOTYPE_FLAG: number;
    static EXTERNAL_PROPERTIES_FLAG: number;
    static FROZEN_FLAG: number;
    static FROZEN_FLAGS: number;
    static NOT_EXTENSIBLE_FLAG: number;
    static NO_ELEMENTS_ASSUMPTION_FLAGS: number;
    static OBJECT_PROTOTYPE_FLAG: number;
    static SEALED_FLAG: number;
    static SEALED_FLAGS: number;
    static UNORDINARY_GETOWNPROPERTY_FLAG: number;
    static createPrototypeShape(paramcontext: JSContext, paramjsclass: JSClass, paramprototype: JSDynamicObject): Shape;
    static createRootWithNullProto(paramcontext: JSContext, paramjsclass: JSClass): Shape;
    static getDefaultShapeFlags(paramjsclass: JSClass): number;
    static getEnumerablePropertyNames(paramshape: Shape): TruffleString[];
    static getJSClass(paramshape: Shape): JSClass;
    static getJSClassNoCast(paramshape: Shape): Object;
    static getJSContext(paramshape: Shape): JSContext;
    static getLayout(paramjsclass: JSClass): Class<JSDynamicObject>;
    static getPropertiesIfHasEnumerablePropertyNames(paramshape: Shape): Property[];
    static getPropertyAssumption(paramshape: Shape, paramkey: Object): Assumption;
    static getPropertyAssumption(paramshape: Shape, paramkey: Object, paramprototype: boolean): Assumption;
    static getPropertyKeyList<T extends unknown>(paramshape: Shape, paramstrings: boolean, paramsymbols: boolean): T[];
    static getProtoChildTree(paramprototype: JSDynamicObject, paramjsclass: JSClass): Shape;
    static getPrototypeAssumption(paramshape: Shape): Assumption;
    static getPrototypeProperty(paramshape: Shape): Property;
    static getSharedData(paramshape: Shape): JSSharedData;
    static hasExternalProperties(paramshapeFlags: number): boolean;
    static hasNoElementsAssumption(paramshape: Shape): boolean;
    static hasNoElementsAssumption(paramobj: JSDynamicObject): boolean;
    static invalidatePrototypeAssumption(paramshape: Shape): void;
    static isArrayPrototypeOrDerivative(paramshape: Shape): boolean;
    static isArrayPrototypeOrDerivative(paramobj: JSDynamicObject): boolean;
    static isExtensible(paramshape: Shape): boolean;
    static isObjectPrototype(paramshape: Shape): boolean;
    static isPrototypeInShape(paramshape: Shape): boolean;
    static makeEmptyRoot(paramjsclass: JSClass, paramcontext: JSContext): Shape;
    static makeEmptyRootWithInstanceProto(paramcontext: JSContext, paramjsclass: JSClass): Shape;
    static makeJSSharedData(paramcontext: JSContext, paramproto: JSDynamicObject): JSSharedData;
    static makeStaticRoot(paramjsclass: JSClass): Shape;
    static newBuilder(paramcontext: JSContext, paramjsclass: JSClass, paramproto: JSDynamicObject): Shape$Builder;
    static newBuilder(paramcontext: JSContext, paramjsclass: JSClass, paramproto: JSDynamicObject, paramshapeFlags: number): Shape$Builder;
    static usesOrdinaryGetOwnProperty(paramshape: Shape): boolean;
    private constructor()
}