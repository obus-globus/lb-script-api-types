import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { AsyncGeneratorResumeNextNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AsyncGeneratorResumeNextNode.d.ts'
import type { InternalCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/InternalCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSAsyncGeneratorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSAsyncGeneratorObject.d.ts'
import type { Completion } from '../../../../../../com/oracle/truffle/js/runtime/objects/Completion.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncGeneratorResumeNextNode$WithCall extends AsyncGeneratorResumeNextNode {
    static create(paramcontext: JSContext): AsyncGeneratorResumeNextNode;
    static createTailCall(paramcontext: JSContext): AsyncGeneratorResumeNextNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private callNode: InternalCallNode;
    performResumeNext(generator: JSAsyncGeneratorObject, completion: Completion): Object;
}