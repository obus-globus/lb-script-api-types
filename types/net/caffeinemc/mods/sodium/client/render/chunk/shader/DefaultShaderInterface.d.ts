import type { GpuSampler } from '../../../../../../../../com/mojang/blaze3d/textures/GpuSampler.d.ts'
import type { GpuTextureView } from '../../../../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { GlBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/buffer/GlBuffer.d.ts'
import type { GlUniformBlock } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformBlock.d.ts'
import type { GlUniformBool } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformBool.d.ts'
import type { GlUniformFloat } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformFloat.d.ts'
import type { GlUniformFloat2v } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformFloat2v.d.ts'
import type { GlUniformFloat3v } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformFloat3v.d.ts'
import type { GlUniformInt } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformInt.d.ts'
import type { GlUniformMatrix4f } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gl/shader/uniform/GlUniformMatrix4f.d.ts'
import type { ChunkShaderFogComponent } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ChunkShaderFogComponent.d.ts'
import type { ChunkShaderInterface } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ChunkShaderInterface.d.ts'
import type { ChunkShaderOptions } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ChunkShaderOptions.d.ts'
import type { ChunkShaderTextureSlot } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ChunkShaderTextureSlot.d.ts'
import type { ShaderBindingContext } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/shader/ShaderBindingContext.d.ts'
import type { TerrainRenderPass } from '../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/terrain/TerrainRenderPass.d.ts'
import type { FogParameters } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
import type { Matrix4fc } from '../../../../../../../../org/joml/Matrix4fc.d.ts'
export class DefaultShaderInterface extends Object implements ChunkShaderInterface {
    constructor(arg0: ShaderBindingContext, arg1: ChunkShaderOptions)
    // private fogShader: ChunkShaderFogComponent;
    // private uniformChunkData: GlUniformBlock;
    // private uniformCurrentTime: GlUniformInt;
    // private uniformFadePeriod: GlUniformFloat;
    // private uniformModelViewMatrix: GlUniformMatrix4f;
    // private uniformProjectionMatrix: GlUniformMatrix4f;
    // private uniformRGSS: GlUniformBool;
    // private uniformRegionOffset: GlUniformFloat3v;
    // private uniformTexCoordShrink: GlUniformFloat2v;
    // private uniformTexelSize: GlUniformFloat2v;
    // private uniformTextures: { [key in ChunkShaderTextureSlot]: GlUniformInt };
    // private bindTexture(arg0: ChunkShaderTextureSlot, arg1: GpuTextureView, arg2: GpuSampler): void;
    resetState(): void;
    setChunkData(arg0: GlBuffer, arg1: number): void;
    setModelViewMatrix(arg0: Matrix4fc): void;
    setProjectionMatrix(arg0: Matrix4fc): void;
    setRegionOffset(arg0: number, arg1: number, arg2: number): void;
    setupState(arg0: TerrainRenderPass, arg1: FogParameters, arg2: GpuSampler): void;
}