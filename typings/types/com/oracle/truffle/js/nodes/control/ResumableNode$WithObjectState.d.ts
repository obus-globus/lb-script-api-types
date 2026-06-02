import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ResumableNode } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ResumableNode$WithObjectState extends ResumableNode, Object{
    asResumableNode(stateSlot: number): JavaScriptNode;
    getState(frame: VirtualFrame, stateSlot: number): Object;
    getStateAndReset(frame: VirtualFrame, stateSlot: number): Object;
    getStateSlotKind(): FrameSlotKind;
    getStateSlotKind(): FrameSlotKind;
    resetState(frame: VirtualFrame, stateSlot: number): void;
    resume(frame: VirtualFrame, stateSlot: number): Object;
    setState(frame: VirtualFrame, stateSlot: number, state: Object): void;
}