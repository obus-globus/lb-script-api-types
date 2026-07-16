import type { AbstractTruffleException } from '../../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { TryCatchNode$GetErrorObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/control/TryCatchNode$GetErrorObjectNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { CreateResolvingFunctionNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/CreateResolvingFunctionNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JobCallback } from '../../../../../../com/oracle/truffle/js/runtime/JobCallback.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PromiseResolveThenableNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): PromiseResolveThenableNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private callRejectNode: JSFunctionCallNode;
    // private callResolveNode: JSFunctionCallNode;
    // private context: JSContext;
    // private createResolvingFunctions: CreateResolvingFunctionNode;
    // private getErrorObjectNode: TryCatchNode$GetErrorObjectNode;
    // private callReject(reject: JSDynamicObject, exception: AbstractTruffleException): Object;
    execute(promiseToResolve: JSPromiseObject, thenable: Object, then: JobCallback): Object;
    executePromiseConstructor(promise: JSPromiseObject, executor: Object): Object;
}