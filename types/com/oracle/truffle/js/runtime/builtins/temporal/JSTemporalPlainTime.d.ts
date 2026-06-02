import type { Node } from '../../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Property } from '../../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { InlinedBranchProfile } from '../../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSBuiltinsContainer } from '../../../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSToIntegerWithTruncationNode } from '../../../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerWithTruncationNode.d.ts'
import type { JSContext } from '../../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructor } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSConstructorFactory$WithFunctions } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructorFactory$WithFunctions.d.ts'
import type { JSFunctionObject } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSNonProxy } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/JSNonProxy.d.ts'
import type { PrototypeSupplier } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSTemporalPlainTimeObject } from '../../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainTimeObject.d.ts'
import type { JSDynamicObject } from '../../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class JSTemporalPlainTime extends JSNonProxy implements JSConstructorFactory$WithFunctions, PrototypeSupplier {
    static CLASS_NAME: TruffleString;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static INSTANCE: JSTemporalPlainTime;
    static PROTOTYPE_NAME: TruffleString;
    static TO_STRING_TAG: TruffleString;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramproto: JSDynamicObject, paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number, paramnode: Node, paramerrorBranch: InlinedBranchProfile): JSTemporalPlainTimeObject;
    static create(paramcontext: JSContext, paramrealm: JSRealm, paramhours: number, paramminutes: number, paramseconds: number, parammilliseconds: number, parammicroseconds: number, paramnanoseconds: number, paramnode: Node, paramerrorBranch: InlinedBranchProfile): JSTemporalPlainTimeObject;
    static createConstructor(paramrealm: JSRealm): JSConstructor;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSTemporalPlainTime(paramobj: Object): boolean;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static temporalTimeToString(paramhour: number, paramminute: number, paramsecond: number, parammillisecond: number, parammicrosecond: number, paramnanosecond: number, paramprecision: Object): TruffleString;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    static toPartialTime(paramtemporalTimeLike: Object, paramtoIntegerWithTruncation: JSToIntegerWithTruncationNode, paramctx: JSContext): JSDynamicObject;
    private constructor()
    createConstructorAndPrototype(realm: JSRealm, functionBuiltins: JSBuiltinsContainer): JSConstructor;
    createPrototype(realm: JSRealm, constructor: JSFunctionObject): JSDynamicObject;
    getClassName(): TruffleString;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    makeInitialShape(context: JSContext, prototype: JSDynamicObject): Shape;
}