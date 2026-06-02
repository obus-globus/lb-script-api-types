import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/ConditionProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { AsyncGeneratorResumeNextNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AsyncGeneratorResumeNextNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { NewPromiseCapabilityNode } from '../../../../../../com/oracle/truffle/js/nodes/promise/NewPromiseCapabilityNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Completion } from '../../../../../../com/oracle/truffle/js/runtime/objects/Completion.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncGeneratorEnqueueNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): AsyncGeneratorEnqueueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private asyncGeneratorResumeNextNode: AsyncGeneratorResumeNextNode;
    // private callPromiseRejectNode: JSFunctionCallNode;
    // private newPromiseCapabilityNode: NewPromiseCapabilityNode;
    // private notExecutingProf: ConditionProfile;
    // private badGeneratorError(promiseCapability: PromiseCapabilityRecord): Object;
    // private enterErrorBranch(): void;
    execute(generator: Object, completion: Completion): Object;
    // private newPromiseCapability(): PromiseCapabilityRecord;
}