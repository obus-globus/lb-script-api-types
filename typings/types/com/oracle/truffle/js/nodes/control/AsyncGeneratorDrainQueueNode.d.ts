import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AsyncGeneratorAwaitReturnNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AsyncGeneratorAwaitReturnNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSAsyncGeneratorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSAsyncGeneratorObject.d.ts'
import type { AsyncGeneratorRequest } from '../../../../../../com/oracle/truffle/js/runtime/objects/AsyncGeneratorRequest.d.ts'
import type { Completion$Type } from '../../../../../../com/oracle/truffle/js/runtime/objects/Completion$Type.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncGeneratorDrainQueueNode extends AsyncGeneratorAwaitReturnNode {
    static create(paramcontext: JSContext): AsyncGeneratorAwaitReturnNode;
    static create(paramcontext: JSContext): AsyncGeneratorDrainQueueNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    asyncGeneratorCompleteStepAndDrainQueue(generator: JSAsyncGeneratorObject, resultType: Completion$Type, resultValue: Object): void;
    asyncGeneratorDrainQueue(generator: JSAsyncGeneratorObject, queue: AsyncGeneratorRequest[]): void;
}