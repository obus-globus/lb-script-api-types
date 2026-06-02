import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ShaderStorageBufferHolder } from '../../../../net/irisshaders/iris/gl/buffer/ShaderStorageBufferHolder.d.ts'
import type { GlImage } from '../../../../net/irisshaders/iris/gl/image/GlImage.d.ts'
import type { ComputeProgram } from '../../../../net/irisshaders/iris/gl/program/ComputeProgram.d.ts'
import type { Program } from '../../../../net/irisshaders/iris/gl/program/Program.d.ts'
import type { TextureAccess } from '../../../../net/irisshaders/iris/gl/texture/TextureAccess.d.ts'
import type { CenterDepthSampler } from '../../../../net/irisshaders/iris/pathways/CenterDepthSampler.d.ts'
import type { CompositePass } from '../../../../net/irisshaders/iris/pipeline/CompositePass.d.ts'
import type { CompositeRenderer$Pass } from '../../../../net/irisshaders/iris/pipeline/CompositeRenderer$Pass.d.ts'
import type { WorldRenderingPipeline } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPipeline.d.ts'
import type { ComputeSource } from '../../../../net/irisshaders/iris/shaderpack/programs/ComputeSource.d.ts'
import type { ProgramSource } from '../../../../net/irisshaders/iris/shaderpack/programs/ProgramSource.d.ts'
import type { PackDirectives } from '../../../../net/irisshaders/iris/shaderpack/properties/PackDirectives.d.ts'
import type { TextureStage } from '../../../../net/irisshaders/iris/shaderpack/texture/TextureStage.d.ts'
import type { ShadowRenderTargets } from '../../../../net/irisshaders/iris/shadows/ShadowRenderTargets.d.ts'
import type { BufferFlipper } from '../../../../net/irisshaders/iris/targets/BufferFlipper.d.ts'
import type { RenderTargets } from '../../../../net/irisshaders/iris/targets/RenderTargets.d.ts'
import type { FrameUpdateNotifier } from '../../../../net/irisshaders/iris/uniforms/FrameUpdateNotifier.d.ts'
import type { CustomUniforms } from '../../../../net/irisshaders/iris/uniforms/custom/CustomUniforms.d.ts'
export class CompositeRenderer extends Object {
    static COMPOSITE_PIPELINE: RenderPipeline;
    constructor(arg0: WorldRenderingPipeline, arg1: CompositePass, arg2: PackDirectives, arg3: ProgramSource[], arg4: ComputeSource[][], arg5: RenderTargets, arg6: ShaderStorageBufferHolder, arg7: TextureAccess, arg8: FrameUpdateNotifier, arg9: CenterDepthSampler, arg10: BufferFlipper, arg11: () => ShadowRenderTargets, arg12: TextureStage, arg13: { [key: string]: TextureAccess }, arg14: { [key: string]: TextureAccess }, arg15: GlImage[], arg16: { [key: number]: boolean }, arg17: CustomUniforms)
    // private centerDepthSampler: CenterDepthSampler;
    // private compositePass: CompositePass;
    // private customImages: GlImage[];
    // private customTextureIds: { [key: string]: TextureAccess };
    // private customUniforms: CustomUniforms;
    readonly flippedAtLeastOnceFinal: number[];
    // private irisCustomTextures: { [key: string]: TextureAccess };
    // private noiseTexture: TextureAccess;
    // private passes: CompositeRenderer$Pass[];
    // private pipeline: WorldRenderingPipeline;
    // private renderTargets: RenderTargets;
    // private textureStage: TextureStage;
    // private createComputes(arg0: ComputeSource[], arg1: number[], arg2: number[], arg3: () => ShadowRenderTargets, arg4: ShaderStorageBufferHolder): ComputeProgram[];
    // private createProgram(arg0: ProgramSource, arg1: number[], arg2: number[], arg3: () => ShadowRenderTargets): Program;
    destroy(): void;
    getFlippedAtLeastOnceFinal(): number[];
    // private hasComputes(arg0: ComputeSource[][]): boolean;
    recalculateSizes(): void;
    renderAll(): void;
}