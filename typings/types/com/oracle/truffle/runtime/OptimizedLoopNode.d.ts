import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RepeatingNode } from '../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
import type { AbstractOptimizedLoopNode } from '../../../../com/oracle/truffle/runtime/AbstractOptimizedLoopNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OptimizedLoopNode extends AbstractOptimizedLoopNode {
    static reportLoopCount(paramsource: Node, paramiterations: number): void;
    constructor(repeatingNode: RepeatingNode)
    execute(frame: VirtualFrame): Object;
}