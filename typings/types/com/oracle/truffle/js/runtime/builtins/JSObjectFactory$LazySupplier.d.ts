import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObjectFactory$BoundProto } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory$BoundProto.d.ts'
import type { JSObjectFactory$Lazy } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory$Lazy.d.ts'
import type { JSObjectFactory$UnboundProto } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory$UnboundProto.d.ts'
import type { PrototypeSupplier } from '../../../../../../com/oracle/truffle/js/runtime/builtins/PrototypeSupplier.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { CompilableBiFunction } from '../../../../../../com/oracle/truffle/js/runtime/util/CompilableBiFunction.d.ts'
export class JSObjectFactory$LazySupplier extends JSObjectFactory$Lazy {
    static createBound(paramcontext: JSContext, paramprototype: JSDynamicObject, paramfactory: Shape): JSObjectFactory$BoundProto;
    static createUnbound(paramcontext: JSContext, paramfactory: Shape): JSObjectFactory$UnboundProto;
    static hasInObjectProto(paramshape: Shape): boolean;
    static verifyPrototype(paramshape: Shape, paramprototype: JSDynamicObject): boolean;
    constructor(context: JSContext, prototypeSupplier: (param0: JSRealm) => com.oracle.truffle.js.runtime.objects.JSDynamicObject, shapeSupplier: (param0: JSContext, param1: JSDynamicObject) => Shape, slot: number)
    // private prototypeSupplier: (param0: JSRealm) => com.oracle.truffle.js.runtime.objects.JSDynamicObject;
    // private shapeSupplier: (param0: JSContext, param1: JSDynamicObject) => Shape;
    getPrototype(realm: JSRealm): JSDynamicObject;
    makeInitialShape(prototype: JSDynamicObject): Shape;
}