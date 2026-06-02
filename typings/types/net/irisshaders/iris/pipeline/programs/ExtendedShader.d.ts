import type { GlProgram } from '../../../../../com/mojang/blaze3d/opengl/GlProgram.d.ts'
import type { GlRenderPass$TextureViewAndSampler } from '../../../../../com/mojang/blaze3d/opengl/GlRenderPass$TextureViewAndSampler.d.ts'
import type { GlShaderModule } from '../../../../../com/mojang/blaze3d/opengl/GlShaderModule.d.ts'
import type { Uniform } from '../../../../../com/mojang/blaze3d/opengl/Uniform.d.ts'
import type { GpuTextureView } from '../../../../../com/mojang/blaze3d/textures/GpuTextureView.d.ts'
import type { VertexFormat } from '../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { AlphaTest } from '../../../../../net/irisshaders/iris/gl/blending/AlphaTest.d.ts'
import type { BlendModeOverride } from '../../../../../net/irisshaders/iris/gl/blending/BlendModeOverride.d.ts'
import type { BufferBlendOverride } from '../../../../../net/irisshaders/iris/gl/blending/BufferBlendOverride.d.ts'
import type { GlFramebuffer } from '../../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
import type { ImageHolder } from '../../../../../net/irisshaders/iris/gl/image/ImageHolder.d.ts'
import type { ProgramImages } from '../../../../../net/irisshaders/iris/gl/program/ProgramImages.d.ts'
import type { ProgramSamplers } from '../../../../../net/irisshaders/iris/gl/program/ProgramSamplers.d.ts'
import type { ProgramUniforms } from '../../../../../net/irisshaders/iris/gl/program/ProgramUniforms.d.ts'
import type { SamplerHolder } from '../../../../../net/irisshaders/iris/gl/sampler/SamplerHolder.d.ts'
import type { DynamicLocationalUniformHolder } from '../../../../../net/irisshaders/iris/gl/uniform/DynamicLocationalUniformHolder.d.ts'
import type { IrisRenderingPipeline } from '../../../../../net/irisshaders/iris/pipeline/IrisRenderingPipeline.d.ts'
import type { IrisProgram } from '../../../../../net/irisshaders/iris/pipeline/programs/IrisProgram.d.ts'
import type { CustomUniforms } from '../../../../../net/irisshaders/iris/uniforms/custom/CustomUniforms.d.ts'
import type { Matrix3f } from '../../../../../org/joml/Matrix3f.d.ts'
import type { Matrix4f } from '../../../../../org/joml/Matrix4f.d.ts'
export class ExtendedShader extends GlProgram implements IrisProgram {
    static BUILT_IN_UNIFORMS: string[];
    static INVALID_PROGRAM: GlProgram;
    static link(paramvertexShader: GlShaderModule, paramfragmentShader: GlShaderModule, paramvertexFormat: VertexFormat, paramdebugLabel: string): GlProgram;
    constructor(arg0: number, arg1: string, arg2: VertexFormat, arg3: boolean, arg4: GlFramebuffer, arg5: GlFramebuffer, arg6: BlendModeOverride, arg7: AlphaTest, arg8: (param0: DynamicLocationalUniformHolder) => void, arg9: (param0: SamplerHolder, param1: ImageHolder) => void, arg10: boolean, arg11: IrisRenderingPipeline, arg12: BufferBlendOverride[], arg13: CustomUniforms)
    // private alphaTest: number;
    // private blendModeOverride: BlendModeOverride;
    // private bufferBlendOverrides: BufferBlendOverride[];
    // private customUniforms: CustomUniforms;
    // private hasOverrides: boolean;
    // private hasUV: boolean;
    // private images: ProgramImages;
    readonly intensitySwizzle: boolean;
    // private isSetup: boolean;
    // private modelViewInverse: number;
    // private normalMat: number;
    // private normalMatrix: Matrix3f;
    // private parent: IrisRenderingPipeline;
    // private pipeline: IrisRenderingPipeline;
    // private projectionInverse: number;
    // private samplers: ProgramSamplers;
    // private tempF: number[];
    // private tempFloats: number[];
    // private tempFloats2: number[];
    // private tempMatrix3f: Matrix3f;
    // private tempMatrix4f: Matrix4f;
    // private textureToUnswizzle: number;
    readonly uniforms: ProgramUniforms;
    // private usesTessellation: boolean;
    // private writingToAfterTranslucent: GlFramebuffer;
    // private writingToBeforeTranslucent: GlFramebuffer;
    getUniforms(): { [key: string]: Uniform };
    hasActiveImages(): boolean;
    iris$clearState(): void;
    iris$getBlockIndex(arg0: number, arg1: CharSequence): number;
    iris$isSetUp(): boolean;
    iris$setupState(arg0: { [key: string]: GlRenderPass$TextureViewAndSampler }, arg1: GpuTextureView): void;
    isIntensitySwizzle(): boolean;
}