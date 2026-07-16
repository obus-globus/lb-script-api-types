import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToDoubleNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { GetRoundingIncrementOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/GetRoundingIncrementOptionNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GetRoundingIncrementOptionNodeGen extends GetRoundingIncrementOptionNode {
    static create(): GetRoundingIncrementOptionNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private getRoundingIncrement_: PropertyGetNode;
    // private state_0_: number;
    // private toDouble_: JSToDoubleNode;
    execute(arg0Value: Object): number;
    // private executeAndSpecialize(arg0Value: Object): number;
}