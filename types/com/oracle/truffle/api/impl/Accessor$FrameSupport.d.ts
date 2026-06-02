import type { FrameDescriptor } from '../../../../../com/oracle/truffle/api/frame/FrameDescriptor.d.ts'
import type { Accessor$Support } from '../../../../../com/oracle/truffle/api/impl/Accessor$Support.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Accessor$FrameSupport extends Accessor$Support {
    constructor()
    getIllegalDefault(): Object;
    getMaterializeCalled(descriptor: FrameDescriptor): boolean;
    markMaterializeCalled(descriptor: FrameDescriptor): void;
}