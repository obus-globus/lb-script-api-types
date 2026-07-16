import type { AbstractTruffleException } from '../../../../../../com/oracle/truffle/api/exception/AbstractTruffleException.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { PropertySetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode.d.ts'
import type { AsyncGeneratorRejectNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AsyncGeneratorRejectNode.d.ts'
import type { AsyncGeneratorResolveNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AsyncGeneratorResolveNode.d.ts'
import type { TryCatchNode$GetErrorObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/control/TryCatchNode$GetErrorObjectNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { NewPromiseCapabilityNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/NewPromiseCapabilityNode.d.ts'
import type { PerformPromiseThenNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PerformPromiseThenNode.d.ts'
import type { PromiseResolveNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/PromiseResolveNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSAsyncGeneratorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSAsyncGeneratorObject.d.ts'
import type { JSFunctionObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSPromiseObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSPromiseObject.d.ts'
import type { Completion } from '../../../../../../com/oracle/truffle/js/runtime/objects/Completion.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncGeneratorResumeNextNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): AsyncGeneratorResumeNextNode;
    static createTailCall(paramcontext: JSContext): AsyncGeneratorResumeNextNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private abruptProf: ConditionProfile;
    // private asyncGeneratorRejectNode: AsyncGeneratorRejectNode;
    // private asyncGeneratorResolveNode: AsyncGeneratorResolveNode;
    // private callPromiseResolveNode: JSFunctionCallNode;
    // private context: JSContext;
    // private getErrorObjectNode: TryCatchNode$GetErrorObjectNode;
    // private newPromiseCapabilityNode: NewPromiseCapabilityNode;
    // private performPromiseThenNode: PerformPromiseThenNode;
    // private promiseResolveNode: PromiseResolveNode;
    // private setGeneratorNode: PropertySetNode;
    // private asyncGeneratorRejectBrokenPromise(generator: JSAsyncGeneratorObject, exception: AbstractTruffleException): void;
    // private createAsyncGeneratorReturnProcessorFulfilledFunction(generator: JSDynamicObject): JSFunctionObject;
    // private createAsyncGeneratorReturnProcessorRejectedFunction(generator: JSDynamicObject): JSFunctionObject;
    // private enterReturnBranch(): void;
    // private enterThrowBranch(): void;
    execute(generator: JSAsyncGeneratorObject): Object;
    // private newPromiseCapability(): PromiseCapabilityRecord;
    // private newThrowawayCapability(): PromiseCapabilityRecord;
    performResumeNext(generator: JSAsyncGeneratorObject, completion: Completion): Object;
    // private promiseResolve(value: Object): JSPromiseObject;
}