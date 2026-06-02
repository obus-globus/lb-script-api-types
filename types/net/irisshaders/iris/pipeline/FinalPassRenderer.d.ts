import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ShaderStorageBufferHolder } from '../../../../net/irisshaders/iris/gl/buffer/ShaderStorageBufferHolder.d.ts'
import type { GlFramebuffer } from '../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
import type { GlImage } from '../../../../net/irisshaders/iris/gl/image/GlImage.d.ts'
import type { ComputeProgram } from '../../../../net/irisshaders/iris/gl/program/ComputeProgram.d.ts'
import type { Program } from '../../../../net/irisshaders/iris/gl/program/Program.d.ts'
import type { TextureAccess } from '../../../../net/irisshaders/iris/gl/texture/TextureAccess.d.ts'
import type { CenterDepthSampler } from '../../../../net/irisshaders/iris/pathways/CenterDepthSampler.d.ts'
import type { FinalPassRenderer$Pass } from '../../../../net/irisshaders/iris/pipeline/FinalPassRenderer$Pass.d.ts'
import type { FinalPassRenderer$SwapPass } from '../../../../net/irisshaders/iris/pipeline/FinalPassRenderer$SwapPass.d.ts'
import type { WorldRenderingPipeline } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPipeline.d.ts'
import type { ComputeSource } from '../../../../net/irisshaders/iris/shaderpack/programs/ComputeSource.d.ts'
import type { ProgramSet } from '../../../../net/irisshaders/iris/shaderpack/programs/ProgramSet.d.ts'
import type { ProgramSource } from '../../../../net/irisshaders/iris/shaderpack/programs/ProgramSource.d.ts'
import type { ShadowRenderTargets } from '../../../../net/irisshaders/iris/shadows/ShadowRenderTargets.d.ts'
import type { RenderTargets } from '../../../../net/irisshaders/iris/targets/RenderTargets.d.ts'
import type { FrameUpdateNotifier } from '../../../../net/irisshaders/iris/uniforms/FrameUpdateNotifier.d.ts'
import type { CustomUniforms } from '../../../../net/irisshaders/iris/uniforms/custom/CustomUniforms.d.ts'
export class FinalPassRenderer extends Object {
    constructor(arg0: WorldRenderingPipeline, arg1: ProgramSet, arg2: RenderTargets, arg3: TextureAccess, arg4: ShaderStorageBufferHolder, arg5: FrameUpdateNotifier, arg6: number[], arg7: CenterDepthSampler, arg8: () => ShadowRenderTargets, arg9: { [key: string]: TextureAccess }, arg10: { [key: string]: TextureAccess }, arg11: GlImage[], arg12: number[], arg13: CustomUniforms)
    // private baseline: GlFramebuffer;
    // private centerDepthSampler: CenterDepthSampler;
    // private colorHolder: GlFramebuffer;
    // private customImages: GlImage[];
    // private customTextureIds: { [key: string]: TextureAccess };
    // private customUniforms: CustomUniforms;
    // private finalPass: FinalPassRenderer$Pass;
    // private irisCustomTextures: { [key: string]: TextureAccess };
    // private lastColorTextureId: number;
    // private lastColorTextureVersion: number;
    // private noiseTexture: TextureAccess;
    // private pipeline: WorldRenderingPipeline;
    // private renderTargets: RenderTargets;
    // private swapPasses: FinalPassRenderer$SwapPass[];
    // private createComputes(arg0: ComputeSource[], arg1: number[], arg2: number[], arg3: () => ShadowRenderTargets, arg4: ShaderStorageBufferHolder): ComputeProgram[];
    // private createProgram(arg0: ProgramSource, arg1: number[], arg2: number[], arg3: () => ShadowRenderTargets): Program;
    destroy(): void;
    recalculateSwapPassSize(): void;
    renderFinalPass(): void;
}