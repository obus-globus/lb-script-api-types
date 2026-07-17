import type { FrameDescriptor } from '../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { SourceSection } from '../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { BaseOSRRootNode } from '../../../../com/oracle/truffle/runtime/BaseOSRRootNode.d.ts'
import type { OptimizedOSRLoopNode } from '../../../../com/oracle/truffle/runtime/OptimizedOSRLoopNode.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class OptimizedOSRLoopNode$AbstractLoopOSRRootNode extends BaseOSRRootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(loop: OptimizedOSRLoopNode, frameDescriptor: FrameDescriptor, clazz: Class<VirtualFrame>)
    // private clazz: Class<VirtualFrame>;
    executeOSR(frame: VirtualFrame): Object;
    getFrame(frame: VirtualFrame): VirtualFrame;
    getLoopNode(): OptimizedOSRLoopNode;
    getSourceSection(): SourceSection;
    isCloningAllowed(): boolean;
    toString(): string;
}