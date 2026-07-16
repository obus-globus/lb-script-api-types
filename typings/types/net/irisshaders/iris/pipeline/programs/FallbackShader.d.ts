import type { GlProgram } from '../../../../../com/mojang/blaze3d/opengl/GlProgram.d.ts'
import type { GlRenderPass$TextureViewAndSampler } from '../../../../../com/mojang/blaze3d/opengl/GlRenderPass$TextureViewAndSampler.d.ts'
import type { GlShaderModule } from '../../../../../com/mojang/blaze3d/opengl/GlShaderModule.d.ts'
import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VertexFormat } from '../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { BlendModeOverride } from '../../../../../net/irisshaders/iris/gl/blending/BlendModeOverride.d.ts'
import type { GlFramebuffer } from '../../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
import type { IrisRenderingPipeline } from '../../../../../net/irisshaders/iris/pipeline/IrisRenderingPipeline.d.ts'
import type { IrisProgram } from '../../../../../net/irisshaders/iris/pipeline/programs/IrisProgram.d.ts'
export class FallbackShader extends GlProgram implements IrisProgram {
    static BUILT_IN_UNIFORMS: string[];
    static INVALID_PROGRAM: GlProgram;
    static link(paramvertexShader: GlShaderModule, paramfragmentShader: GlShaderModule, paramvertexBindings: VertexFormat[], paramdebugLabel: string): GlProgram;
    constructor(arg0: number, arg1: RenderPipeline, arg2: string, arg3: VertexFormat, arg4: GlFramebuffer, arg5: GlFramebuffer, arg6: BlendModeOverride, arg7: number, arg8: IrisRenderingPipeline)
    // private FOG_DENSITY: number;
    // private FOG_IS_EXP2: number;
    // private blendModeOverride: BlendModeOverride;
    // private gtexture: number;
    // private isSetUp: boolean;
    // private lightmap: number;
    // private overlay: number;
    // private parent: IrisRenderingPipeline;
    // private writingToAfterTranslucent: GlFramebuffer;
    // private writingToBeforeTranslucent: GlFramebuffer;
    iris$clearState(): void;
    iris$getBlockIndex(arg0: number, arg1: CharSequence): number;
    iris$isSetUp(): boolean;
    iris$setupState(arg0: { [key: string]: GlRenderPass$TextureViewAndSampler }, arg1: GpuTextureView): void;
}