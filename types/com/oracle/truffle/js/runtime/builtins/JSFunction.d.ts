import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { FrameInstance } from '../../../../../../com/oracle/truffle/api/frame/FrameInstance.d.ts'
import type { MaterializedFrame } from '../../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { Source } from '../../../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { SourceSection } from '../../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSConstructor } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSConstructor.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionFactory.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSNonProxy } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSNonProxy.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { PropertyDescriptor } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyDescriptor.d.ts'
import type { PropertyProxy } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyProxy.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class JSFunction extends JSNonProxy {
    static ARGUMENTS: TruffleString;
    static ARGUMENTS_PROXY: PropertyProxy;
    static ASYNC_FROM_SYNC_ITERATOR_PROTOTYPE_NAME: TruffleString;
    static ASYNC_FUNCTION_NAME: TruffleString;
    static ASYNC_GENERATOR_FUNCTION_NAME: TruffleString;
    static ASYNC_GENERATOR_NAME: TruffleString;
    static BUILTIN_SOURCE_NAME: string;
    static BUILTIN_SOURCE_SECTION: SourceSection;
    static CALLER: TruffleString;
    static CALLER_PROXY: PropertyProxy;
    static CLASS_ELEMENTS_ID: HiddenKey;
    static CLASS_INITIALIZERS_ID: HiddenKey;
    static CLASS_NAME: TruffleString;
    static CLASS_PROTOTYPE_PLACEHOLDER: Object;
    static CONSTRUCT: JSDynamicObject;
    static DEBUG_SCOPE_ID: HiddenKey;
    static ENUMERATE_ITERATOR_PROTOTYPE_NAME: TruffleString;
    static GENERATOR_FUNCTION_NAME: TruffleString;
    static GENERATOR_NAME: TruffleString;
    static GET_SYMBOL_SPECIES_NAME: TruffleString;
    static HOME_OBJECT_ID: HiddenKey;
    static INSTANCE: JSFunction;
    static LENGTH: TruffleString;
    static LENGTH_PROXY: PropertyProxy;
    static NAME: TruffleString;
    static NAME_PROXY: PropertyProxy;
    static ORDINARY_HAS_INSTANCE: TruffleString;
    static PRIVATE_BRAND_ID: HiddenKey;
    static PROGRAM_FUNCTION_NAME: string;
    static PROTOTYPE_NAME: TruffleString;
    static PROTOTYPE_PROXY: PropertyProxy;
    static TS_BUILTIN_SOURCE_NAME: TruffleString;
    static TYPE_NAME: TruffleString;
    static addRestrictedFunctionProperties(paramrealm: JSRealm, paramobj: JSDynamicObject): void;
    static bind(paramrealm: JSRealm, paramthisFnObj: JSFunctionObject, paramthisArg: Object, paramboundArguments: (Object | null)[]): JSFunctionObject;
    static boundFunctionCreate(paramcontext: JSContext, paramboundTargetFunction: JSFunctionObject, paramboundThis: Object, paramboundArguments: (Object | null)[], paramproto: JSDynamicObject, paramisConstructorProfile: InlinedConditionProfile, paramisAsyncProfile: InlinedConditionProfile, paramsetProtoProfile: InlinedConditionProfile, paramnode: Node): JSFunctionObject;
    static call(paramfunctionObject: JSFunctionObject, paramthisObject: Object, paramargumentValues: (Object | null)[]): Object;
    static call(paramjsArguments: (Object | null)[]): Object;
    static checkProtoCycle(paramthisObj: JSDynamicObject, paramnewPrototype: JSDynamicObject): boolean;
    static construct(paramfunctionObject: JSFunctionObject, paramargumentValues: (Object | null)[]): Object;
    static create(paramrealm: JSRealm, paramfunctionData: JSFunctionData): JSFunctionObject;
    static create(paramrealm: JSRealm, paramfunctionData: JSFunctionData, paramenclosingFrame: MaterializedFrame): JSFunctionObject;
    static createAsyncFromSyncIteratorPrototype(paramrealm: JSRealm): JSObject;
    static createAsyncFunctionConstructor(paramrealm: JSRealm): JSConstructor;
    static createAsyncFunctionPrototype(paramrealm: JSRealm, paramconstructor: JSDynamicObject): JSObject;
    static createAsyncGeneratorFunctionConstructor(paramrealm: JSRealm): JSConstructor;
    static createAsyncGeneratorFunctionPrototype(paramrealm: JSRealm, paramconstructor: JSDynamicObject): JSObject;
    static createAsyncIteratorPrototype(paramrealm: JSRealm): JSObject;
    static createBound(paramcontext: JSContext, paramrealm: JSRealm, paramfunctionData: JSFunctionData, paramboundTargetFunction: Object, paramboundThis: Object, paramboundArguments: (Object | null)[]): JSFunctionObject;
    static createBoundRootNode(paramcontext: JSContext, paramconstruct: boolean, paramnewTarget: boolean): RootNode;
    static createBuiltinSourceSection(paramname: string): SourceSection;
    static createEmptyFunction(paramrealm: JSRealm): JSFunctionObject;
    static createEmptyFunctionData(paramcontext: JSContext): JSFunctionData;
    static createEnumerateIteratorPrototype(paramrealm: JSRealm): JSDynamicObject;
    static createForInIteratorPrototype(paramrealm: JSRealm): JSDynamicObject;
    static createFunctionConstructor(paramrealm: JSRealm): JSFunctionObject;
    static createFunctionPrototype(paramrealm: JSRealm, paramobjectPrototype: JSDynamicObject): JSFunctionObject;
    static createGeneratorFunctionConstructor(paramrealm: JSRealm): JSConstructor;
    static createGeneratorFunctionPrototype(paramrealm: JSRealm, paramconstructor: JSDynamicObject): JSObject;
    static createLexicalThis(paramrealm: JSRealm, paramfunctionData: JSFunctionData, paramenclosingFrame: MaterializedFrame, paramlexicalThis: Object): JSFunctionObject;
    static createNamedEmptyFunction(paramrealm: JSRealm, paramname: TruffleString): JSFunctionObject;
    static createNamedEmptyFunctionData(paramcontext: JSContext, paramname: TruffleString): JSFunctionData;
    static createOrdinaryHasInstanceFunction(paramrealm: JSRealm): JSDynamicObject;
    static createWithPrototype(paramrealm: JSRealm, paramfunctionData: JSFunctionData, paramprototype: JSDynamicObject): JSFunctionObject;
    static createWithPrototype(paramfactory: JSFunctionFactory, paramrealm: JSRealm, paramfunctionData: JSFunctionData, paramenclosingFrame: MaterializedFrame, paramprototype: JSDynamicObject): JSFunctionObject;
    static createWrapped(paramcontext: JSContext, paramrealm: JSRealm, paramfunctionData: JSFunctionData, paramwrappedTargetFunction: Object): JSFunctionObject;
    static fillFunctionPrototype(paramrealm: JSRealm): void;
    static filterOwnPropertyKeys(paramownPropertyKeys: Object[], paramstrings: boolean, paramsymbols: boolean): Object[];
    static getCallTarget(paramobj: JSFunctionObject): CallTarget;
    static getCallerSource(): Source;
    static getClassPrototype(paramthisObj: JSFunctionObject): Object;
    static getClassPrototypeInitialized(paramthisObj: JSFunctionObject): Object;
    static getConstructNewTarget(paramobj: JSFunctionObject): CallTarget;
    static getConstructTarget(paramobj: JSFunctionObject): CallTarget;
    static getEnclosingFrame(paramobj: JSFunctionObject): MaterializedFrame;
    static getFrameRootNode(paramframeInstance: FrameInstance): RootNode;
    static getFunctionData(paramobj: JSFunctionObject): JSFunctionData;
    static getLength(paramobj: JSFunctionObject): number;
    static getLexicalThis(paramthisObj: JSFunctionObject): Object;
    static getName(paramobj: JSFunctionObject): TruffleString;
    static getRealm(paramobj: JSFunctionObject): JSRealm;
    static getRealm(paramfunctionObj: JSFunctionObject, paramcontext: JSContext, paramnode: Node): JSRealm;
    static isAsyncFunction(paramfunction: JSFunctionObject): boolean;
    static isBoundFunction(paramfunction: Object): boolean;
    static isBuiltin(paramobj: JSFunctionObject): boolean;
    static isBuiltinSourceSection(paramsourceSection: SourceSection): boolean;
    static isBuiltinThatShouldNotAppearInStackTrace(paramrealm: JSRealm, paramfunction: JSDynamicObject): boolean;
    static isClassPrototypeInitialized(paramthisObj: JSFunctionObject): boolean;
    static isConstructor(paramobj: JSFunctionObject): boolean;
    static isConstructor(paramobj: Object): boolean;
    static isGenerator(paramobj: JSFunctionObject): boolean;
    static isInstance(paramobject: JSDynamicObject, paramjsclass: JSClass): boolean;
    static isInstance(paramobject: Object, paramjsclass: JSClass): boolean;
    static isJSFunction(paramobj: Object): boolean;
    static isStrict(paramobj: JSFunctionObject): boolean;
    static isStrictBuiltin(paramfunction: JSFunctionObject, paramrealm: JSRealm): boolean;
    static makeFunctionShape(paramcontext: JSContext, paramprototype: JSDynamicObject, paramisGenerator: boolean, paramisAsync: boolean): Shape;
    static makeInitialEnumerateIteratorShape(paramcontext: JSContext, paramenumerateIteratorPrototype: JSDynamicObject): Shape;
    static needsParentFrame(paramobj: JSFunctionObject): boolean;
    static ordinaryGetOwnProperty(paramthisObj: JSDynamicObject, paramkey: Object): PropertyDescriptor;
    static ordinaryGetOwnPropertyIntl(paramthisObj: JSDynamicObject, paramkey: Object, paramprop: Property): PropertyDescriptor;
    static ordinaryIsExtensible(paramthisObj: JSDynamicObject): boolean;
    static ordinaryOwnPropertyKeys(paramthisObj: JSDynamicObject): Object[];
    static ordinaryPreventExtensions(paramthisObj: JSDynamicObject, paramextraFlags: number): boolean;
    static setBoundFunctionName(paramboundFunction: JSDynamicObject, paramtargetName: TruffleString): void;
    static setClassPrototype(paramthisObj: JSFunctionObject, paramvalue: Object): void;
    static setFunctionLength(paramfunctionObj: JSDynamicObject, paramlength: Number): void;
    static setFunctionName(paramfunctionObj: JSDynamicObject, paramname: TruffleString): void;
    static setIntegrityLevelFast(paramthisObj: JSDynamicObject, paramfreeze: boolean): boolean;
    static testIntegrityLevelFast(paramobj: JSDynamicObject, paramfrozen: boolean): boolean;
    private constructor()
    hasOnlyShapeProperties(obj: JSDynamicObject): boolean;
}