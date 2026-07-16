import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { AsyncGeneratorResumeNextNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AsyncGeneratorResumeNextNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSAsyncGeneratorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSAsyncGeneratorObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncGeneratorRejectNode extends JavaScriptBaseNode {
    static create(): AsyncGeneratorRejectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private asyncGeneratorResumeNextNode: AsyncGeneratorResumeNextNode;
    // private callRejectNode: JSFunctionCallNode;
    execute(generator: JSAsyncGeneratorObject, exception: Object): Object;
    performReject(generator: JSAsyncGeneratorObject, exception: Object): void;
}