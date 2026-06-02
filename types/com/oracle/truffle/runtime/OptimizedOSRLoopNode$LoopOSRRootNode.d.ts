import type { FrameDescriptor } from '../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { OptimizedOSRLoopNode } from '../../../../com/oracle/truffle/runtime/OptimizedOSRLoopNode.d.ts'
import type { OptimizedOSRLoopNode$AbstractLoopOSRRootNode } from '../../../../com/oracle/truffle/runtime/OptimizedOSRLoopNode$AbstractLoopOSRRootNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OptimizedOSRLoopNode$LoopOSRRootNode extends OptimizedOSRLoopNode$AbstractLoopOSRRootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(loop: OptimizedOSRLoopNode, frameDescriptor: FrameDescriptor, clazz: Class<VirtualFrame>)
}