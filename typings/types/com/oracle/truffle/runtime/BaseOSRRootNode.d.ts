import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { FrameDescriptor } from '../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { NodeInterface } from '../../../../com/oracle/truffle/api/nodes/NodeInterface.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class BaseOSRRootNode extends RootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(language: TruffleLanguage<Object>, frameDescriptor: FrameDescriptor, loopNode: NodeInterface)
    // private loopNode: NodeInterface;
    execute(frame: VirtualFrame): Object;
    executeOSR(frame: VirtualFrame): Object;
    prepareForCompilation(rootCompilation: boolean, compilationTier: number, lastTier: boolean): boolean;
}