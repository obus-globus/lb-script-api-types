import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { LoopNode } from '../../../../../com/oracle/truffle/api/nodes/LoopNode.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RepeatingNode } from '../../../../../com/oracle/truffle/api/nodes/RepeatingNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultLoopNode extends LoopNode {
    static reportLoopCount(paramsource: Node, paramiterations: number): void;
    constructor(repeatNode: RepeatingNode)
    // private repeatNode: RepeatingNode;
    execute(frame: VirtualFrame): Object;
    getRepeatingNode(): RepeatingNode;
}