import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { CreateIterResultObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateIterResultObjectNode.d.ts'
import type { AsyncGeneratorResumeNextNode } from '../../../../../../com/oracle/truffle/js/nodes/control/AsyncGeneratorResumeNextNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSAsyncGeneratorObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSAsyncGeneratorObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AsyncGeneratorResolveNode extends JavaScriptBaseNode {
    static create(paramcontext: JSContext): AsyncGeneratorResolveNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    // private asyncGeneratorResumeNextNode: AsyncGeneratorResumeNextNode;
    // private callResolveNode: JSFunctionCallNode;
    // private createIterResultObjectNode: CreateIterResultObjectNode;
    execute(generator: JSAsyncGeneratorObject, value: Object, done: boolean): Object;
    performResolve(generator: JSAsyncGeneratorObject, value: Object, done: boolean): void;
}