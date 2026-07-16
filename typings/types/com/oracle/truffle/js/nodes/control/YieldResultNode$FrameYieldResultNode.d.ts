import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JSWriteFrameSlotNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSWriteFrameSlotNode.d.ts'
import type { YieldException } from '../../../../../../com/oracle/truffle/js/nodes/control/YieldException.d.ts'
import type { YieldResultNode } from '../../../../../../com/oracle/truffle/js/nodes/control/YieldResultNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class YieldResultNode$FrameYieldResultNode extends YieldResultNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(writeYieldValueNode: JSWriteFrameSlotNode)
    // private writeYieldValueNode: JSWriteFrameSlotNode;
    cloneUninitialized(): YieldResultNode;
    generatorYield(frame: VirtualFrame, value: Object): YieldException;
}