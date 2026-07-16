import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { NewPromiseCapabilityNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/NewPromiseCapabilityNode.d.ts'
import type { PerformPromiseThenNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseThenNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncIteratorCloseNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): AsyncIteratorCloseNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private callNode: JSFunctionCallNode;
    // private context: JSContext;
    // private getConstructorNode: PropertyGetNode;
    // private getReturnNode: GetMethodNode;
    // private methodCallNode: JSFunctionCallNode;
    // private newPromiseCapabilityNode: NewPromiseCapabilityNode;
    // private performPromiseThenNode: PerformPromiseThenNode;
    // private setCompletionNode: PropertySetNode;
    // private setPromiseNode: PropertySetNode;
    createCloseAbruptFunction(promise: JSDynamicObject, completion: Object): JSFunctionObject;
    createCloseFunction(promise: JSDynamicObject, completion: Object): JSFunctionObject;
    execute(iterator: Object, outerResult: Object): Object;
    executeAbrupt(iterator: Object, error: Object): Object;
    executeAbruptReject(iterator: Object, error: Object, resultCapability: PromiseCapabilityRecord): void;
    // private promiseResolve(promiseOrValue: Object): JSPromiseObject;
}