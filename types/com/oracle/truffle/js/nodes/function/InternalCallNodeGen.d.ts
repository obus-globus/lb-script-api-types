import type { CallTarget } from '../../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { IndirectCallNode } from '../../../../../../com/oracle/truffle/api/nodes/IndirectCallNode.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InternalCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/InternalCallNode.d.ts'
import type { InternalCallNodeGen$DirectCallData } from '../../../../../../com/oracle/truffle/js/nodes/function/InternalCallNodeGen$DirectCallData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InternalCallNodeGen extends InternalCallNode {
    static create(): InternalCallNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private directCall_cache: InternalCallNodeGen$DirectCallData;
    // private indirectCall_indirectCallNode_: IndirectCallNode;
    // private state_0_: number;
    execute(arg0Value: CallTarget, arg1Value: Object[]): Object;
    // private executeAndSpecialize(arg0Value: CallTarget, arg1Value: Object[]): Object;
}