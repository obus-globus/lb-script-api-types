import type { RenderPipeline } from '../../../../com/mojang/blaze3d/pipeline/RenderPipeline.d.ts'
import type { RenderTarget } from '../../../../com/mojang/blaze3d/pipeline/RenderTarget.d.ts'
import type { MeshData } from '../../../../com/mojang/blaze3d/vertex/MeshData.d.ts'
import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { VertexFormat$Mode } from '../../../../com/mojang/blaze3d/vertex/VertexFormat$Mode.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RenderingWrapper } from '../../../../net/irisshaders/iris/layer/RenderingWrapper.d.ts'
import type { RenderSetup } from '../../../../net/minecraft/client/renderer/rendertype/RenderSetup.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class OuterWrappedRenderType extends RenderType {
    static BIG_BUFFER_SIZE: number;
    static SMALL_BUFFER_SIZE: number;
    static TRANSIENT_BUFFER_SIZE: number;
    static create(paramname: string, paramstate: RenderSetup): RenderType;
    static wrapExactlyOnce(paramarg0: string, paramarg1: RenderType, paramarg2: RenderingWrapper): OuterWrappedRenderType;
    constructor(arg0: string, arg1: RenderType, arg2: RenderingWrapper)
    // private extra: RenderingWrapper;
    // private wrapped: RenderType;
    affectsCrumbling(): boolean;
    bufferSize(): number;
    canConsolidateConsecutiveGeometry(): boolean;
    draw(arg0: MeshData): void;
    equals(arg0: Object | null): boolean;
    format(): VertexFormat;
    hasBlending(): boolean;
    hashCode(): number;
    iris$getPipeline(): RenderPipeline;
    iris$getRenderTarget(): RenderTarget;
    isOutline(): boolean;
    mode(): VertexFormat$Mode;
    outline(): Optional<RenderType>;
    pipeline(): RenderPipeline;
    sortOnUpload(): boolean;
    toString(): string;
    // private unwrap(): RenderType;
}