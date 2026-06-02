import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { InternalCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/InternalCallNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AwaitResumeNode extends JavaScriptBaseNode {
    static create(paramrejected: boolean): AwaitResumeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(rejected: boolean)
    // private executeResumeNode: InternalCallNode;
    // private rejected: boolean;
    execute(asyncTarget: CallTarget, asyncContext: Object, generator: Object, result: Object): Object;
}