import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameInstance } from '../../../../../com/oracle/truffle/api/frame/FrameInstance.d.ts'
import type { FrameInstance$FrameAccess } from '../../../../../com/oracle/truffle/api/frame/FrameInstance$FrameAccess.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultTruffleRuntime$DefaultFrameInstance extends Object implements FrameInstance {
    constructor(frame: VirtualFrame, target: CallTarget, callNode: Node, callerFrame: DefaultTruffleRuntime$DefaultFrameInstance)
    readonly callNode: Node;
    // private callerFrame: DefaultTruffleRuntime$DefaultFrameInstance;
    // private frame: VirtualFrame;
    // private target: CallTarget;
    // private captureFrame(rootNode: RootNode): Frame;
    getBytecodeIndex(): number;
    getCallNode(): Node;
    getCallTarget(): CallTarget;
    getCompilationTier(): number;
    getFrame(access: FrameInstance$FrameAccess): Frame;
    getInstrumentableCallNode(): Node;
    isCompilationRoot(): boolean;
    isVirtualFrame(): boolean;
    withCallNode(otherCallNode: Node): DefaultTruffleRuntime$DefaultFrameInstance;
}