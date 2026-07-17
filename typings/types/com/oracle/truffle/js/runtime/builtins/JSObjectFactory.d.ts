import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObjectFactory$BoundProto } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory$BoundProto.d.ts'
import type { JSObjectFactory$UnboundProto } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory$UnboundProto.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSObjectFactory extends Object {
    static createBound(paramcontext: JSContext, paramprototype: JSDynamicObject, paramfactory: Shape): JSObjectFactory$BoundProto;
    static createUnbound(paramcontext: JSContext, paramfactory: Shape): JSObjectFactory$UnboundProto;
    static hasInObjectProto(paramshape: Shape): boolean;
    static verifyPrototype(paramshape: Shape, paramprototype: JSDynamicObject): boolean;
    constructor(context: JSContext, inObjectProto: boolean)
    // private context: JSContext;
    // private inObjectProto: boolean;
    // private setProto: DynamicObject$PutNode;
    getPrototype(realm: JSRealm): JSDynamicObject;
    getShape(realm: JSRealm): Shape;
    getShape(realm: JSRealm, prototype: JSDynamicObject): Shape;
    initProto<T extends JSDynamicObject>(obj: T, realm: JSRealm): T;
    initProto<T extends JSDynamicObject>(obj: T, realm: JSRealm, prototype: JSDynamicObject): T;
    isInObjectProto(realm: JSRealm, prototype: JSDynamicObject): boolean;
    setPrototype(obj: JSDynamicObject, prototype: JSDynamicObject): void;
    trackAllocation<T extends JSDynamicObject>(obj: T): T;
}