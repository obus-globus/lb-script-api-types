import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { NodeInterface } from '../../../../../com/oracle/truffle/api/nodes/NodeInterface.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FrameDescriptorProvider extends NodeInterface, Object{
    getFrameDescriptor(): FrameDescriptor;
}