import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSBuiltinsContainer } from '../../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { Accessor } from '../../../../../../com/oracle/truffle/js/runtime/objects/Accessor.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { JSPrototypeData } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSPrototypeData.d.ts'
import type { PropertyProxy } from '../../../../../../com/oracle/truffle/js/runtime/objects/PropertyProxy.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSObjectUtil extends Object {
    static changePropertyFlags(paramthisObj: JSDynamicObject, paramkey: Object, paramflags: number): void;
    static checkForNoSuchPropertyOrMethod<T extends unknown>(paramcontext: JSContext, paramkey: T): T;
    static copyProperties<T extends JSDynamicObject>(paramtarget: T, paramsource: JSDynamicObject): T;
    static createCached(paramkey: Object, paramobj: JSDynamicObject): DynamicObjectLibrary;
    static createDispatched(paramkey: Object): DynamicObjectLibrary;
    static createDispatched(paramkey: Object, paramlimit: number): DynamicObjectLibrary;
    static createOrdinaryPrototypeObject(paramrealm: JSRealm): JSObject;
    static createOrdinaryPrototypeObject(paramrealm: JSRealm, paramprototype: JSDynamicObject): JSObject;
    static defineAccessorProperty(paramcontext: JSContext, paramthisObj: JSDynamicObject, paramkey: Object, paramaccessor: Accessor, paramflags: number): void;
    static defineAccessorProperty(paramcontext: JSContext, paramthisObj: JSDynamicObject, paramkey: Object, paramgetter: JSDynamicObject, paramsetter: JSDynamicObject, paramflags: number): void;
    static defineAccessorProperty(paramthisObj: JSDynamicObject, paramkey: Object, paramaccessor: Accessor, paramflags: number): void;
    static defineConstantDataProperty(paramcontext: JSContext, paramthisObj: JSDynamicObject, paramkey: Object, paramvalue: Object, paramflags: number): void;
    static defineDataProperty(paramcontext: JSContext, paramthisObj: JSDynamicObject, paramkey: Object, paramvalue: Object, paramflags: number): void;
    static defineDataProperty(paramthisObj: JSDynamicObject, paramkey: Object, paramvalue: Object, paramflags: number): void;
    static defineProxyProperty(paramthisObj: JSDynamicObject, paramkey: Object, paramproxy: PropertyProxy, paramflags: number): void;
    static formatToString(paramobject: TruffleString): TruffleString;
    static getHiddenProperty(paramobj: JSDynamicObject, paramkey: Object): Object;
    static getProtoChildShape(paramobj: JSDynamicObject, paramjsclass: JSClass, paramcontext: JSContext): Shape;
    static getProtoChildShape(paramobj: JSDynamicObject, paramjsclass: JSClass, paramcontext: JSContext, paramnode: Node, parambranchProfile: InlinedBranchProfile): Shape;
    static getPrototype(paramthisObj: JSDynamicObject): JSDynamicObject;
    static hasHiddenProperty(paramobj: JSDynamicObject, paramkey: Object): boolean;
    static isNoSuchPropertyOrMethod(paramkey: Object): boolean;
    static isValidPrototype(paramproto: Object): boolean;
    static putAccessorsFromContainer(paramrealm: JSRealm, paramthisObj: JSDynamicObject, paramcontainer: JSBuiltinsContainer): void;
    static putBuiltinAccessorProperty(paramthisObj: JSDynamicObject, paramkey: Object, paramaccessor: Accessor): void;
    static putBuiltinAccessorProperty(paramthisObj: JSDynamicObject, paramkey: Object, paramaccessor: Accessor, paramflags: number): void;
    static putBuiltinAccessorProperty(paramthisObj: JSDynamicObject, paramkey: Object, paramgetter: JSDynamicObject, paramsetter: JSDynamicObject): void;
    static putBuiltinAccessorProperty(paramthisObj: JSDynamicObject, paramkey: Object, paramgetter: JSDynamicObject, paramsetter: JSDynamicObject, paramflags: number): void;
    static putConstructorProperty(paramprototype: JSDynamicObject, paramconstructor: JSDynamicObject): void;
    static putConstructorPrototypeProperty(paramconstructor: JSDynamicObject, paramprototype: JSDynamicObject): void;
    static putDataProperty(paramthisObj: JSDynamicObject, paramname: Object, paramvalue: Object): void;
    static putDataProperty(paramthisObj: JSDynamicObject, paramkey: Object, paramvalue: Object, paramflags: number): void;
    static putFunctionFromContainer(paramrealm: JSRealm, paramthisObj: JSDynamicObject, paramcontainer: JSBuiltinsContainer, paramkey: Object): void;
    static putFunctionsFromContainer(paramrealm: JSRealm, paramthisObj: JSDynamicObject, paramcontainer: JSBuiltinsContainer): void;
    static putHiddenProperty(paramobj: JSDynamicObject, paramkey: Object, paramvalue: Object): void;
    static putPrototypeData(paramobj: JSDynamicObject): JSPrototypeData;
    static putProxyProperty(paramthisObj: JSDynamicObject, paramkey: Object, paramproxy: PropertyProxy, paramflags: number): void;
    static putToStringTag(paramprototype: JSDynamicObject, paramtoStringTag: TruffleString): void;
    static setOrVerifyPrototype(paramcontext: JSContext, paramobj: JSDynamicObject, paramprototype: JSDynamicObject): void;
    static setPrototypeImpl(paramobject: JSDynamicObject, paramnewPrototype: JSDynamicObject): void;
    private constructor()
}