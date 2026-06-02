import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlFramebuffer } from '../../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
export interface DepthCopyStrategy extends Object{
    copy(arg0: GlFramebuffer, arg1: number, arg2: GlFramebuffer, arg3: number, arg4: number, arg5: number): void;
    needsDestFramebuffer(): boolean;
}