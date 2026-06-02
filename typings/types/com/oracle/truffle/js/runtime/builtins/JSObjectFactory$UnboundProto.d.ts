import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObjectFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory.d.ts'
import type { JSObjectFactory$BoundProto } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory$BoundProto.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class JSObjectFactory$UnboundProto extends JSObjectFactory {
    static createBound(paramcontext: JSContext, paramprototype: JSDynamicObject, paramfactory: Shape): JSObjectFactory$BoundProto;
    static createUnbound(paramcontext: JSContext, paramfactory: Shape): JSObjectFactory$UnboundProto;
    static hasInObjectProto(paramshape: Shape): boolean;
    static verifyPrototype(paramshape: Shape, paramprototype: JSDynamicObject): boolean;
    constructor(context: JSContext, factory: Shape)
    // private factory: Shape;
    getPrototype(realm: JSRealm): JSDynamicObject;
    getShape(realm: JSRealm, proto: JSDynamicObject): Shape;
}