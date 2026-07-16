import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { IteratorNextNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorNextNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IteratorNextNodeGen extends IteratorNextNode {
    static create(): IteratorNextNode;
    static getUncached(): IteratorNextNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private isObjectNode_: IsObjectNode;
    // private methodCallNode_: JSFunctionCallNode;
    // private state_0_: number;
    execute(iteratorRecord: IteratorRecord): Object;
    execute(iteratorRecord: IteratorRecord, value: Object): Object;
    execute(arg0Value: IteratorRecord, arg1Value: Object, arg2Value: boolean): Object;
    // private executeAndSpecialize(arg0Value: IteratorRecord, arg1Value: Object, arg2Value: boolean): Object;
}