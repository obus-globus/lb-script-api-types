import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlFramebuffer } from '../../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
import type { DepthCopyStrategy } from '../../../../../net/irisshaders/iris/gl/texture/DepthCopyStrategy.d.ts'
export class DepthCopyStrategy$Gl20CopyTexture extends Object implements DepthCopyStrategy {
    private constructor()
    copy(arg0: GlFramebuffer, arg1: number, arg2: GlFramebuffer, arg3: number, arg4: number, arg5: number): void;
    needsDestFramebuffer(): boolean;
}