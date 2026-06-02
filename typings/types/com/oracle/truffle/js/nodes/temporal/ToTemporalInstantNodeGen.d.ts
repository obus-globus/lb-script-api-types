import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { ToTemporalInstantNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalInstantNode.d.ts'
import type { JSTemporalInstantObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalInstantObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToTemporalInstantNodeGen extends ToTemporalInstantNode {
    static create(): ToTemporalInstantNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private isObjectNode_: IsObjectNode;
    // private state_0_: number;
    // private toPrimitiveNode_: JSToPrimitiveNode;
    execute(arg0Value: Object): JSTemporalInstantObject;
    // private executeAndSpecialize(arg0Value: Object): JSTemporalInstantObject;
}