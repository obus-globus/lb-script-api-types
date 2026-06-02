import type { ReplaceObserver } from '../../../../com/oracle/truffle/api/ReplaceObserver.d.ts'
import type { LoopNode } from '../../../../com/oracle/truffle/api/nodes/LoopNode.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RepeatingNode } from '../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
import type { AbstractOptimizedLoopNode } from '../../../../com/oracle/truffle/runtime/AbstractOptimizedLoopNode.d.ts'
export abstract class OptimizedOSRLoopNode extends AbstractOptimizedLoopNode implements ReplaceObserver {
    static create(paramrepeat: RepeatingNode): LoopNode;
    static reportLoopCount(paramsource: Node, paramiterations: number): void;
    private constructor(repeatingNode: RepeatingNode, osrThreshold: number, firstTierBackedgeCounts: boolean)
}