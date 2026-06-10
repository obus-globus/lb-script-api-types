import type { VertexFormat } from '../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AlphaTest } from '../../../../../net/irisshaders/iris/gl/blending/AlphaTest.d.ts'
import type { BlendModeOverride } from '../../../../../net/irisshaders/iris/gl/blending/BlendModeOverride.d.ts'
import type { GlFramebuffer } from '../../../../../net/irisshaders/iris/gl/framebuffer/GlFramebuffer.d.ts'
import type { FogMode } from '../../../../../net/irisshaders/iris/gl/state/FogMode.d.ts'
import type { ShaderAttributeInputs } from '../../../../../net/irisshaders/iris/gl/state/ShaderAttributeInputs.d.ts'
import type { IrisRenderingPipeline } from '../../../../../net/irisshaders/iris/pipeline/IrisRenderingPipeline.d.ts'
import type { WorldRenderingPipeline } from '../../../../../net/irisshaders/iris/pipeline/WorldRenderingPipeline.d.ts'
import type { PartialShader } from '../../../../../net/irisshaders/iris/pipeline/programs/PartialShader.d.ts'
import type { ShaderKey } from '../../../../../net/irisshaders/iris/pipeline/programs/ShaderKey.d.ts'
import type { ShaderSupplier } from '../../../../../net/irisshaders/iris/pipeline/programs/ShaderSupplier.d.ts'
import type { ProgramId } from '../../../../../net/irisshaders/iris/shaderpack/loading/ProgramId.d.ts'
import type { ProgramSource } from '../../../../../net/irisshaders/iris/shaderpack/programs/ProgramSource.d.ts'
import type { ShadowRenderTargets } from '../../../../../net/irisshaders/iris/shadows/ShadowRenderTargets.d.ts'
import type { FrameUpdateNotifier } from '../../../../../net/irisshaders/iris/uniforms/FrameUpdateNotifier.d.ts'
import type { CustomUniforms } from '../../../../../net/irisshaders/iris/uniforms/custom/CustomUniforms.d.ts'
export class ShaderCreator extends Object {
    static create(paramarg0: WorldRenderingPipeline, paramarg1: string, paramarg2: ShaderKey, paramarg3: ProgramSource, paramarg4: ProgramId, paramarg5: GlFramebuffer, paramarg6: GlFramebuffer, paramarg7: AlphaTest, paramarg8: VertexFormat, paramarg9: ShaderAttributeInputs, paramarg10: FrameUpdateNotifier, paramarg11: IrisRenderingPipeline, paramarg12: () => number[], paramarg13: FogMode, paramarg14: boolean, paramarg15: boolean, paramarg16: boolean, paramarg17: boolean, paramarg18: CustomUniforms): ShaderSupplier;
    static createFallback(paramarg0: string, paramarg1: ShaderKey, paramarg2: GlFramebuffer, paramarg3: GlFramebuffer, paramarg4: AlphaTest, paramarg5: VertexFormat, paramarg6: BlendModeOverride, paramarg7: IrisRenderingPipeline, paramarg8: FogMode, paramarg9: boolean, paramarg10: boolean, paramarg11: boolean, paramarg12: boolean, paramarg13: boolean): ShaderSupplier;
    static createFallbackShadow(paramarg0: string, paramarg1: ShaderKey, paramarg2: () => ShadowRenderTargets, paramarg3: AlphaTest, paramarg4: VertexFormat, paramarg5: BlendModeOverride, paramarg6: IrisRenderingPipeline, paramarg7: FogMode, paramarg8: boolean, paramarg9: boolean, paramarg10: boolean, paramarg11: boolean, paramarg12: boolean): ShaderSupplier;
    static createShadow(paramarg0: WorldRenderingPipeline, paramarg1: string, paramarg2: ShaderKey, paramarg3: ProgramSource, paramarg4: ProgramId, paramarg5: () => ShadowRenderTargets, paramarg6: AlphaTest, paramarg7: VertexFormat, paramarg8: ShaderAttributeInputs, paramarg9: FrameUpdateNotifier, paramarg10: IrisRenderingPipeline, paramarg11: () => number[], paramarg12: FogMode, paramarg13: boolean, paramarg14: boolean, paramarg15: boolean, paramarg16: boolean, paramarg17: CustomUniforms): ShaderSupplier;
    static link(paramarg0: string, paramarg1: string, paramarg2: string, paramarg3: string, paramarg4: string, paramarg5: string, paramarg6: VertexFormat, paramarg7: boolean): PartialShader;
    constructor()
}