import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlProgram } from '../../../../../net/caffeinemc/mods/sodium/client/gl/shader/GlProgram.d.ts'
import type { GlProgram$Builder } from '../../../../../net/caffeinemc/mods/sodium/client/gl/shader/GlProgram$Builder.d.ts'
import type { GlShader } from '../../../../../net/caffeinemc/mods/sodium/client/gl/shader/GlShader.d.ts'
import type { ChunkShaderInterface } from '../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ChunkShaderInterface.d.ts'
import type { TerrainRenderPass } from '../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { AlphaTest } from '../../../../../net/irisshaders/iris/gl/blending/AlphaTest.d.ts'
import type { BufferBlendOverride } from '../../../../../net/irisshaders/iris/gl/blending/BufferBlendOverride.d.ts'
import type { GlFramebuffer } from '../../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
import type { IrisRenderingPipeline } from '../../../../../net/irisshaders/iris/pipeline/IrisRenderingPipeline.d.ts'
import type { SodiumPrograms$Pass } from '../../../../../net/irisshaders/iris/pipeline/programs/SodiumPrograms$Pass.d.ts'
import type { PatchShaderType } from '../../../../../net/irisshaders/iris/pipeline/transform/PatchShaderType.d.ts'
import type { ProgramFallbackResolver } from '../../../../../net/irisshaders/iris/shaderpack/programs/ProgramFallbackResolver.d.ts'
import type { ProgramSet } from '../../../../../net/irisshaders/iris/shaderpack/programs/ProgramSet.d.ts'
import type { ProgramSource } from '../../../../../net/irisshaders/iris/shaderpack/programs/ProgramSource.d.ts'
import type { ShadowRenderTargets } from '../../../../../net/irisshaders/iris/shadows/ShadowRenderTargets.d.ts'
import type { RenderTargets } from '../../../../../net/irisshaders/iris/targets/RenderTargets.d.ts'
import type { CustomUniforms } from '../../../../../net/irisshaders/iris/uniforms/custom/CustomUniforms.d.ts'
export class SodiumPrograms extends Object {
    constructor(arg0: IrisRenderingPipeline, arg1: ProgramSet, arg2: ProgramFallbackResolver, arg3: RenderTargets, arg4: () => ShadowRenderTargets, arg5: CustomUniforms)
    // private framebuffers: { [key in SodiumPrograms$Pass]: GlFramebuffer };
    // private hasBlockId: boolean;
    // private hasMidBlock: boolean;
    // private hasMidUv: boolean;
    // private hasNormal: boolean;
    // private shaders: { [key in SodiumPrograms$Pass]: GlProgram<ChunkShaderInterface> };
    // private buildProgram(arg0: GlProgram$Builder, arg1: IrisRenderingPipeline, arg2: SodiumPrograms$Pass, arg3: ProgramSource, arg4: AlphaTest, arg5: CustomUniforms, arg6: () => number[], arg7: boolean): GlProgram<ChunkShaderInterface>;
    // private createBufferBlendOverrides(arg0: ProgramSource): BufferBlendOverride[];
    // private createFramebuffer(arg0: SodiumPrograms$Pass, arg1: ProgramSource, arg2: () => ShadowRenderTargets, arg3: RenderTargets, arg4: () => number[]): GlFramebuffer;
    // private createGlShaders(arg0: string, arg1: { [key in PatchShaderType]: string }): { [key in PatchShaderType]: GlShader };
    // private createShader(arg0: IrisRenderingPipeline, arg1: SodiumPrograms$Pass, arg2: ProgramSource, arg3: AlphaTest, arg4: CustomUniforms, arg5: () => number[], arg6: { [key in PatchShaderType]: GlShader }): GlProgram<ChunkShaderInterface>;
    // private getAlphaTest(arg0: SodiumPrograms$Pass, arg1: ProgramSource): AlphaTest;
    // private getFlipState(arg0: IrisRenderingPipeline, arg1: SodiumPrograms$Pass, arg2: boolean): () => number[];
    getFramebuffer(arg0: TerrainRenderPass): GlFramebuffer;
    getProgram(arg0: TerrainRenderPass): GlProgram<ChunkShaderInterface>;
    // private mapTerrainRenderPass(arg0: TerrainRenderPass): SodiumPrograms$Pass;
    // private transformShaders(arg0: ProgramSource, arg1: AlphaTest, arg2: ProgramSet): { [key in PatchShaderType]: string };
}