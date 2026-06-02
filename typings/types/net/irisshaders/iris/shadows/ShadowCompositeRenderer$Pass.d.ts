import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlendModeOverride } from '../../../../net/irisshaders/iris/gl/blending/BlendModeOverride.d.ts'
import type { GlFramebuffer } from '../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
import type { ViewportData } from '../../../../net/irisshaders/iris/gl/framebuffer/ViewportData.d.ts'
import type { ComputeProgram } from '../../../../net/irisshaders/iris/gl/program/ComputeProgram.d.ts'
import type { Program } from '../../../../net/irisshaders/iris/gl/program/Program.d.ts'
import type { CustomPass } from '../../../../net/irisshaders/iris/mixinterface/CustomPass.d.ts'
export class ShadowCompositeRenderer$Pass extends Object implements CustomPass {
    private constructor()
    // private blendModeOverride: BlendModeOverride;
    // private computes: ComputeProgram[];
    // private flippedAtLeastOnce: number[];
    // private framebuffer: GlFramebuffer;
    // private mipmappedBuffers: number[];
    // private name: string;
    // private program: Program;
    // private stageReadsFromAlt: number[];
    // private viewportScale: ViewportData;
    destroy(): void;
    setupState(): void;
}