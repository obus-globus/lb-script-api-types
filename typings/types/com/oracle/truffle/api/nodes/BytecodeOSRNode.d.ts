import type { Frame } from '../../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { NodeInterface } from '../../../../../com/oracle/truffle/api/nodes/NodeInterface.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BytecodeOSRNode extends NodeInterface, Object{
    copyIntoOSRFrame(osrFrame: VirtualFrame, parentFrame: VirtualFrame, target: number, targetMetadata: Object): void;
    executeOSR(osrFrame: VirtualFrame, target: number, interpreterState: Object): Object;
    getOSRMetadata(): Object;
    prepareOSR(target: number): void;
    restoreParentFrame(osrFrame: VirtualFrame, parentFrame: VirtualFrame): void;
    restoreParentFrameFromArguments(arguments: Object[]): Frame;
    setOSRMetadata(osrMetadata: Object): void;
    storeParentFrameInArguments(parentFrame: VirtualFrame): Object[];
    transferOSRFrame(osrFrame: VirtualFrame, parentFrame: VirtualFrame, target: number, targetMetadata: Object): void;
}