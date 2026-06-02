import type { GlSampler } from '../../../../../com/mojang/blaze3d/opengl/GlSampler.d.ts'
import type { GpuSampler } from '../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GlBuffer } from '../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBuffer.d.ts'
import type { GlUniformBlock } from '../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformBlock.d.ts'
import type { GlUniformFloat2v } from '../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformFloat2v.d.ts'
import type { GlUniformFloat3v } from '../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformFloat3v.d.ts'
import type { GlUniformInt } from '../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformInt.d.ts'
import type { GlUniformMatrix4f } from '../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformMatrix4f.d.ts'
import type { ChunkShaderInterface } from '../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ChunkShaderInterface.d.ts'
import type { ShaderBindingContext } from '../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ShaderBindingContext.d.ts'
import type { TerrainRenderPass } from '../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { FogParameters } from '../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
import type { BlendModeOverride } from '../../../../../net/irisshaders/iris/gl/blending/BlendModeOverride.d.ts'
import type { BufferBlendOverride } from '../../../../../net/irisshaders/iris/gl/blending/BufferBlendOverride.d.ts'
import type { ProgramImages } from '../../../../../net/irisshaders/iris/gl/program/ProgramImages.d.ts'
import type { ProgramSamplers } from '../../../../../net/irisshaders/iris/gl/program/ProgramSamplers.d.ts'
import type { ProgramUniforms } from '../../../../../net/irisshaders/iris/gl/program/ProgramUniforms.d.ts'
import type { IrisRenderingPipeline } from '../../../../../net/irisshaders/iris/pipeline/IrisRenderingPipeline.d.ts'
import type { GlUniformMatrix3f } from '../../../../../net/irisshaders/iris/pipeline/programs/GlUniformMatrix3f.d.ts'
import type { SodiumPrograms$Pass } from '../../../../../net/irisshaders/iris/pipeline/programs/SodiumPrograms$Pass.d.ts'
import type { CustomUniforms } from '../../../../../net/irisshaders/iris/uniforms/custom/CustomUniforms.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class SodiumShader extends Object implements ChunkShaderInterface {
    constructor(arg0: IrisRenderingPipeline, arg1: SodiumPrograms$Pass, arg2: ShaderBindingContext, arg3: number, arg4: BlendModeOverride, arg5: BufferBlendOverride[], arg6: CustomUniforms, arg7: () => number[], arg8: number, arg9: boolean)
    // private alphaTest: number;
    // private anisotropySupported: boolean;
    // private blendModeOverride: BlendModeOverride;
    // private bufferBlendOverrides: BufferBlendOverride[];
    // private containsTessellation: boolean;
    // private customUniforms: CustomUniforms;
    // private images: ProgramImages;
    // private isShadowPass: boolean;
    // private samplers: ProgramSamplers;
    // private uniformChunkData: GlUniformBlock;
    // private uniformCurrentTime: GlUniformInt;
    // private uniformModelViewMatrix: GlUniformMatrix4f;
    // private uniformModelViewMatrixInv: GlUniformMatrix4f;
    // private uniformNormalMatrix: GlUniformMatrix3f;
    // private uniformProjectionMatrix: GlUniformMatrix4f;
    // private uniformProjectionMatrixInv: GlUniformMatrix4f;
    // private uniformRegionOffset: GlUniformFloat3v;
    // private uniformTexCoordShrink: GlUniformFloat2v;
    // private uniformTexelSize: GlUniformFloat2v;
    // private uniforms: ProgramUniforms;
    // private applyBlendModes(): void;
    // private bindTextures(arg0: GpuTextureView, arg1: GlSampler): void;
    // private buildImages(arg0: IrisRenderingPipeline, arg1: SodiumPrograms$Pass, arg2: number, arg3: boolean, arg4: () => number[]): ProgramImages;
    // private buildSamplers(arg0: IrisRenderingPipeline, arg1: SodiumPrograms$Pass, arg2: number, arg3: boolean, arg4: () => number[]): ProgramSamplers;
    // private buildUniforms(arg0: SodiumPrograms$Pass, arg1: number, arg2: CustomUniforms): ProgramUniforms;
    resetState(): void;
    setChunkData(arg0: GlBuffer, arg1: number): void;
    setModelViewMatrix(arg0: Matrix4fc): void;
    setProjectionMatrix(arg0: Matrix4fc): void;
    setRegionOffset(arg0: number, arg1: number, arg2: number): void;
    setupState(arg0: TerrainRenderPass, arg1: FogParameters, arg2: GpuSampler): void;
    // private updateUniforms(): void;
}