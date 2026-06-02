import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ShaderStorageBufferHolder } from '../../../../net/irisshaders/iris/gl/buffer/ShaderStorageBufferHolder.d.ts'
import type { GlImage } from '../../../../net/irisshaders/iris/gl/image/GlImage.d.ts'
import type { ComputeProgram } from '../../../../net/irisshaders/iris/gl/program/ComputeProgram.d.ts'
import type { Program } from '../../../../net/irisshaders/iris/gl/program/Program.d.ts'
import type { TextureAccess } from '../../../../net/irisshaders/iris/gl/texture/TextureAccess.d.ts'
import type { WorldRenderingPipeline } from '../../../../net/irisshaders/iris/pipeline/WorldRenderingPipeline.d.ts'
import type { ComputeSource } from '../../../../net/irisshaders/iris/shaderpack/programs/ComputeSource.d.ts'
import type { ProgramSource } from '../../../../net/irisshaders/iris/shaderpack/programs/ProgramSource.d.ts'
import type { PackDirectives } from '../../../../net/irisshaders/iris/shaderpack/properties/PackDirectives.d.ts'
import type { ShadowCompositeRenderer$Pass } from '../../../../net/irisshaders/iris/shadows/ShadowCompositeRenderer$Pass.d.ts'
import type { ShadowRenderTargets } from '../../../../net/irisshaders/iris/shadows/ShadowRenderTargets.d.ts'
import type { FrameUpdateNotifier } from '../../../../net/irisshaders/iris/uniforms/FrameUpdateNotifier.d.ts'
import type { CustomUniforms } from '../../../../net/irisshaders/iris/uniforms/custom/CustomUniforms.d.ts'
export class ShadowCompositeRenderer extends Object {
    constructor(arg0: WorldRenderingPipeline, arg1: PackDirectives, arg2: ProgramSource[], arg3: ComputeSource[][], arg4: ShadowRenderTargets, arg5: ShaderStorageBufferHolder, arg6: TextureAccess, arg7: FrameUpdateNotifier, arg8: { [key: string]: TextureAccess }, arg9: GlImage[], arg10: { [key: number]: boolean }, arg11: { [key: string]: TextureAccess }, arg12: CustomUniforms)
    // private customTextureIds: { [key: string]: TextureAccess };
    // private customUniforms: CustomUniforms;
    readonly flippedAtLeastOnceFinal: number[];
    // private irisCustomImages: GlImage[];
    // private irisCustomTextures: { [key: string]: TextureAccess };
    // private noiseTexture: TextureAccess;
    // private passes: ShadowCompositeRenderer$Pass[];
    // private pipeline: WorldRenderingPipeline;
    // private renderTargets: ShadowRenderTargets;
    // private createComputes(arg0: ComputeSource[], arg1: number[], arg2: number[], arg3: ShadowRenderTargets, arg4: ShaderStorageBufferHolder): ComputeProgram[];
    // private createProgram(arg0: ProgramSource, arg1: number[], arg2: number[], arg3: ShadowRenderTargets): Program;
    destroy(): void;
    getFlippedAtLeastOnceFinal(): number[];
    renderAll(): void;
}