import type { FrameSlotKind } from '../../../../../../com/oracle/truffle/api/frame/FrameSlotKind.d.ts'
import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ResumableNode } from '../../../../../../com/oracle/truffle/js/nodes/control/ResumableNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ResumableNode$WithIntState extends ResumableNode, Object{
    asResumableNode(stateSlot: number): JavaScriptNode;
    getStateAsInt(frame: VirtualFrame, stateSlot: number): number;
    getStateAsIntAndReset(frame: VirtualFrame, stateSlot: number): number;
    getStateSlotKind(): FrameSlotKind;
    getStateSlotKind(): FrameSlotKind;
    resetState(frame: VirtualFrame, stateSlot: number): void;
    resume(frame: VirtualFrame, stateSlot: number): Object;
    setStateAsInt(frame: VirtualFrame, stateSlot: number, state: number): void;
}