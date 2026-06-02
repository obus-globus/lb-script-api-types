import type { LoopNode } from '../../../../com/oracle/truffle/api/nodes/LoopNode.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RepeatingNode } from '../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
import type { OptimizedOSRLoopNode } from '../../../../com/oracle/truffle/runtime/OptimizedOSRLoopNode.d.ts'
export class OptimizedOSRLoopNode$OptimizedDefaultOSRLoopNode extends OptimizedOSRLoopNode {
    static create(paramrepeat: RepeatingNode): LoopNode;
    static reportLoopCount(paramsource: Node, paramiterations: number): void;
    constructor(repeatableNode: RepeatingNode, osrThreshold: number, firstTierBackedgeCounts: boolean)
}