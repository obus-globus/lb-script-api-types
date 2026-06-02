import type { LoopNode } from '../../../../com/oracle/truffle/api/nodes/LoopNode.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RepeatingNode } from '../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
export abstract class AbstractOptimizedLoopNode extends LoopNode {
    static reportLoopCount(paramsource: Node, paramiterations: number): void;
    constructor(repeatingNode: RepeatingNode)
    // private falseCount: number;
    repeatingNode: RepeatingNode;
    // private trueCount: number;
    getRepeatingNode(): RepeatingNode;
    inject(condition: boolean): boolean;
    profileCounted(iterations: number): void;
}