import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { Accessor$FrameSupport } from '../../../../../com/oracle/truffle/api/impl/Accessor$FrameSupport.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FrameAccessor$FramesImpl extends Accessor$FrameSupport {
    constructor()
    getIllegalDefault(): Object;
    getMaterializeCalled(descriptor: FrameDescriptor): boolean;
    markMaterializeCalled(descriptor: FrameDescriptor): void;
}