import type { FrameInstance } from '../../../../../com/oracle/truffle/api/frame/FrameInstance.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FrameInstanceVisitor<T extends unknown> extends Object{
    visitFrame(frameInstance: FrameInstance): T;
}