import type { InitFunctionNode } from '../../../../../../com/oracle/truffle/js/nodes/function/InitFunctionNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSFunctionData } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionData.d.ts'
import type { JSFunctionFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionFactory.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSObjectFactory } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSObjectFactory.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class JSFunctionFactory$Intrinsic extends JSFunctionFactory {
    static create(paramcontext: JSContext, paramprototype: JSDynamicObject): JSFunctionFactory;
    constructor(context: JSContext, objectFactory: JSObjectFactory, isStrict: boolean, isConstructor: boolean, isGenerator: boolean, isBound: boolean, isAsync: boolean)
    // private initFunctionNode: InitFunctionNode;
    getPrototype(realm: JSRealm): JSDynamicObject;
    initProperties(obj: JSFunctionObject, functionData: JSFunctionData): void;
}