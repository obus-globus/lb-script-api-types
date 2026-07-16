import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { CreateIterResultObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateIterResultObjectNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { AsyncGeneratorRequest } from '../../../../../../com/oracle/truffle/js/runtime/objects/AsyncGeneratorRequest.d.ts'
import type { Completion$Type } from '../../../../../../com/oracle/truffle/js/runtime/objects/Completion$Type.d.ts'
import type { PromiseCapabilityRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/PromiseCapabilityRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncGeneratorCompleteStepNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private callNode: JSFunctionCallNode;
    // private createIterResultObjectNode: CreateIterResultObjectNode;
    asyncGeneratorCompleteStep(completionType: Completion$Type, completionValue: Object, done: boolean, queue: AsyncGeneratorRequest[]): void;
    // private asyncGeneratorCompleteStepNormal(value: Object, done: boolean, promiseCapability: PromiseCapabilityRecord): void;
    // private asyncGeneratorCompleteStepThrow(value: Object, promiseCapability: PromiseCapabilityRecord): void;
}