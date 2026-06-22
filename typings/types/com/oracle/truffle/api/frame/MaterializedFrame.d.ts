import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { VirtualFrame } from '../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface MaterializedFrame extends VirtualFrame, Object{
    getFrameDescriptor(): FrameDescriptor;
    materialize(): MaterializedFrame;
}