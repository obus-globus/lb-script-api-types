import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { AbstractDisposeResourcesNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AbstractDisposeResourcesNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { NewPromiseCapabilityNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/NewPromiseCapabilityNode.d.ts'
import type { PerformPromiseThenNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseThenNode.d.ts'
import type { PromiseResolveNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PromiseResolveNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { DisposeCapability } from '../../../../../../com/oracle/truffle/js/runtime/util/DisposeCapability.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncDisposeResourcesNode extends AbstractDisposeResourcesNode {
    static create(paramcontext: JSContext): AsyncDisposeResourcesNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext)
    // private callNode: JSFunctionCallNode;
    // private context: JSContext;
    // private newPromiseCapabilityNode: NewPromiseCapabilityNode;
    // private performPromiseThenNode: PerformPromiseThenNode;
    // private promiseResolveNode: PromiseResolveNode;
    // private setCapability: PropertySetNode;
    // private setError: PropertySetNode;
    // private setHasAwaited: PropertySetNode;
    // private setNeedsAwait: PropertySetNode;
    // private setPromiseCapability: PropertySetNode;
    // private awaitResult(capability: DisposeCapability, errorObject: Object, promiseCapability: PromiseCapabilityRecord, needsAwait: boolean, hasAwaited: boolean, promiseOrValue: Object): Object;
    // private createContinuationFunction(capability: DisposeCapability, errorObject: Object, rejected: boolean, promiseCapability: PromiseCapabilityRecord, needsAwait: boolean, hasAwaited: boolean): JSFunctionObject;
    // private disposeRemaining(capability: DisposeCapability, currentError: Object, promiseCapability: PromiseCapabilityRecord, needsAwaitParam: boolean, hasAwaited: boolean): Object;
    execute(capability: DisposeCapability, currentError: Object): Object;
    execute(capability: DisposeCapability, currentError: Object, promiseCapability: PromiseCapabilityRecord): void;
    execute(capability: DisposeCapability, currentError: Object, promiseCapability: PromiseCapabilityRecord, needsAwait: boolean, hasAwaited: boolean): void;
    // private rejectPromise(promiseCapability: PromiseCapabilityRecord, error: Object): void;
    // private resolvePromise(promiseCapability: PromiseCapabilityRecord, value: Object): void;
    resumeRejected(capability: DisposeCapability, currentError: Object, rejection: Object, promiseCapability: PromiseCapabilityRecord, needsAwait: boolean, hasAwaited: boolean): void;
    resumeRejected(capability: DisposeCapability, currentError: Object, rejection: Object, needsAwait: boolean, hasAwaited: boolean): Object;
}