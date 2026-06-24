import type { PrimitiveTopology } from '../../../../../com/mojang/blaze3d/PrimitiveTopology.d.ts'
import type { GpuBufferSlice } from '../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice.d.ts'
import type { RenderPipeline } from '../../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { VertexFormat } from '../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MixinRenderTypeAccessor } from '../../../../../net/ccbluex/liquidbounce/injection/mixins/minecraft/render/MixinRenderTypeAccessor.d.ts'
import type { RenderTypeAccessor } from '../../../../../net/irisshaders/iris/mixin/rendertype/RenderTypeAccessor.d.ts'
import type { RenderTypeInterface } from '../../../../../net/irisshaders/iris/mixinterface/RenderTypeInterface.d.ts'
import type { OutputTarget } from '../../../../../net/minecraft/client/renderer/rendertype/OutputTarget.d.ts'
import type { PreparedRenderType } from '../../../../../net/minecraft/client/renderer/rendertype/PreparedRenderType.d.ts'
import type { RenderSetup } from '../../../../../net/minecraft/client/renderer/rendertype/RenderSetup.d.ts'
import type { Matrix4f } from '../../../../../org/joml/Matrix4f.d.ts'
export class RenderType extends Object implements MixinRenderTypeAccessor, RenderTypeAccessor, RenderTypeInterface {
    static BIG_BUFFER_SIZE: number;
    static SMALL_BUFFER_SIZE: number;
    static TRANSIENT_BUFFER_SIZE: number;
    static create(paramname: string, paramstate: RenderSetup): RenderType;
    constructor(name: string, state: RenderSetup)
    readonly name: string;
    readonly state: RenderSetup;
    affectsCrumbling(): boolean;
    canConsolidateConsecutiveGeometry(): boolean;
    format(): VertexFormat;
    getName(): string;
    getState(): RenderSetup;
    hasBlending(): boolean;
    iris$getPipeline(): RenderPipeline;
    iris$getRenderTarget(): RenderTarget;
    isOutline(): boolean;
    outline(): Optional<RenderType>;
    outputTarget(): OutputTarget;
    pipeline(): RenderPipeline;
    prepare(): PreparedRenderType;
    primitiveTopology(): PrimitiveTopology;
    sortOnUpload(): boolean;
    toString(): string;
    // private writeDynamicTransforms(modelViewMatrix: Matrix4f): GpuBufferSlice;
}