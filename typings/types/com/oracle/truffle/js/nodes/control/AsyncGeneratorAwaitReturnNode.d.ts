import type { AbstractTruffleException } from '../../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { AsyncGeneratorCompleteStepNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AsyncGeneratorCompleteStepNode.d.ts'
import type { TryCatchNode$GetErrorObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/control/TryCatchNode$GetErrorObjectNode.d.ts'
import type { PerformPromiseThenNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseThenNode.d.ts'
import type { PromiseResolveNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PromiseResolveNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSAsyncGeneratorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSAsyncGeneratorObject.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { AsyncGeneratorRequest } from '../../../../../../com/oracle/truffle/js/runtime/objects/AsyncGeneratorRequest.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncGeneratorAwaitReturnNode extends AsyncGeneratorCompleteStepNode {
    static create(paramcontext: JSContext): AsyncGeneratorAwaitReturnNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private context: JSContext;
    // private getErrorObjectNode: TryCatchNode$GetErrorObjectNode;
    // private performPromiseThenNode: PerformPromiseThenNode;
    // private promiseResolveNode: PromiseResolveNode;
    // private setGeneratorNode: PropertySetNode;
    asyncGeneratorAwaitReturn(generator: Object, queue: AsyncGeneratorRequest[]): void;
    asyncGeneratorRejectBrokenPromise(generator: JSAsyncGeneratorObject, exception: AbstractTruffleException, queue: AsyncGeneratorRequest[]): void;
    // private createAsyncGeneratorReturnProcessorFulfilledFunction(generator: Object): JSFunctionObject;
    // private createAsyncGeneratorReturnProcessorRejectedFunction(generator: Object): JSFunctionObject;
    executeAsyncGeneratorAwaitReturn(generator: JSAsyncGeneratorObject, queue: AsyncGeneratorRequest[]): void;
    getErrorObject(ex: AbstractTruffleException): Object;
    // private promiseResolve(value: Object): JSPromiseObject;
}