import type { CallTarget } from '../../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { FrameInstance$FrameAccess } from '../../../../../com/oracle/truffle/api/frame/FrameInstance$FrameAccess.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { RootNode } from '../../../../../com/oracle/truffle/api/nodes/RootNode.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FrameInstance extends Object{
    // private captureFrame(rootNode: RootNode): Frame;
    getBytecodeIndex(): number;
    getCallNode(): Node;
    getCallTarget(): CallTarget;
    getCompilationTier(): number;
    getFrame(access: FrameInstance$FrameAccess): Frame;
    getInstrumentableCallNode(): Node;
    isCompilationRoot(): boolean;
    isVirtualFrame(): boolean;
}