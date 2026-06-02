import type { IntSupplier } from '../../../../java/util/function/IntSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { GlFramebuffer } from '../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
import type { Program } from '../../../../net/irisshaders/iris/gl/program/Program.d.ts'
import type { InternalTextureFormat } from '../../../../net/irisshaders/iris/gl/texture/InternalTextureFormat.d.ts'
export class CenterDepthSampler extends Object {
    constructor(arg0: () => kotlin.Int, arg1: number)
    // private altTexture: number;
    // private destroyed: boolean;
    // private everRetrieved: boolean;
    // private framebuffer: GlFramebuffer;
    // private hasFirstSample: boolean;
    // private program: Program;
    // private texture: number;
    destroy(): void;
    getCenterDepthTexture(): number;
    sampleCenterDepth(): void;
    setUsage(arg0: boolean): void;
    setupColorTexture(arg0: number, arg1: InternalTextureFormat): void;
}