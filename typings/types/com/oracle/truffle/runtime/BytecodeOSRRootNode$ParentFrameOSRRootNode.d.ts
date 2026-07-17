import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { FrameDescriptor } from '../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { BytecodeOSRNode } from '../../../../com/oracle/truffle/api/nodes/BytecodeOSRNode.d.ts'
import type { RootNode } from '../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { BytecodeOSRRootNode } from '../../../../com/oracle/truffle/runtime/BytecodeOSRRootNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BytecodeOSRRootNode$ParentFrameOSRRootNode extends BytecodeOSRRootNode {
    static createConstantNode(paramconstant: Object): RootNode;
    constructor(language: TruffleLanguage<Object>, frameDescriptor: FrameDescriptor, bytecodeOSRNode: BytecodeOSRNode, target: number, interpreterState: Object, entryTagsCache: Object)
    executeOSR(frame: VirtualFrame): Object;
    getFrame(frame: VirtualFrame): VirtualFrame;
    usesParentFrame(): boolean;
}