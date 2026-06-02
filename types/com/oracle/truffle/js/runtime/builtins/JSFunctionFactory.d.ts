import type { MaterializedFrame } from '../../../../../../com/oracle/truffle/api/frame/MaterializedFrame.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSObjectFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSFunctionFactory extends Object {
    static create(paramcontext: JSContext, paramprototype: JSDynamicObject): JSFunctionFactory;
    constructor(context: JSContext, objectFactory: JSObjectFactory)
    // private context: JSContext;
    // private objectFactory: JSObjectFactory;
    create(functionData: JSFunctionData, enclosingFrame: MaterializedFrame, classPrototype: Object, realm: JSRealm): JSFunctionObject;
    createBound(functionData: JSFunctionData, classPrototype: Object, realm: JSRealm, boundTargetFunction: Object, boundThis: Object, boundArguments: Object[]): JSFunctionObject;
    // private createBoundES5(shape: Shape, functionData: JSFunctionData, classPrototype: Object, realm: JSRealm, boundTargetFunction: Object, boundThis: Object, boundArguments: Object[]): JSFunctionObject;
    createWithPrototype(functionData: JSFunctionData, enclosingFrame: MaterializedFrame, classPrototype: Object, realm: JSRealm, prototype: JSDynamicObject): JSFunctionObject;
    createWrapped(functionData: JSFunctionData, realm: JSRealm, wrappedTargetFunction: Object): JSFunctionObject;
    getPrototype(realm: JSRealm): JSDynamicObject;
    getShape(realm: JSRealm, prototype: JSDynamicObject): Shape;
    initProperties(obj: JSFunctionObject, functionData: JSFunctionData): void;
}