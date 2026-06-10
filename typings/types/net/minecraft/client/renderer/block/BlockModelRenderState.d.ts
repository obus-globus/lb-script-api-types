import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MutableMesh } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MutableMesh.d.ts'
import type { QuadEmitter } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/QuadEmitter.d.ts'
import type { FabricBlockModelRenderState } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/render/FabricBlockModelRenderState.d.ts'
import type { FabricRenderState } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/FabricRenderState.d.ts'
import type { RenderStateDataKey } from '../../../../../net/fabricmc/fabric/api/client/rendering/v1/RenderStateDataKey.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockStateModelPart } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { SpecialModelRenderer } from '../../../../../net/minecraft/client/renderer/special/SpecialModelRenderer.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class BlockModelRenderState extends Object implements FabricBlockModelRenderState, FabricRenderState {
    static EMPTY_TINTS: number[];
    constructor()
    // private mesh: MutableMesh;
    // private modelParts: BlockStateModelPart[];
    // private randomSource: RandomSource;
    // private renderStateData: Map<Object | null, Object | null>;
    // private renderType: RenderType;
    // private specialRenderer: SpecialModelRenderer<Object>;
    // private specialRendererTransformation: Matrix4fc;
    // private tintLayers: (Object | null)[];
    // private transformation: Matrix4fc;
    clear(): void;
    clearExtraData(): void;
    getData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>): T;
    getData(arg0: RenderStateDataKey<Object>): Object;
    getDataOrDefault<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): T;
    getDataOrDefault(arg0: RenderStateDataKey<Object>, arg1: Object): Object;
    isEmpty(): boolean;
    scratchRandomSource(seed: number): RandomSource;
    setData<T extends Object | number | string | boolean>(arg0: RenderStateDataKey<T>, arg1: T): void;
    setData(arg0: RenderStateDataKey<Object>, arg1: Object): void;
    setupMesh(arg0: Matrix4fc, arg1: boolean): QuadEmitter;
    setupModel(transformation: Matrix4fc, hasTranslucency: boolean): BlockStateModelPart[];
    setupSpecialModel<T extends Object | number | string | boolean>(renderer: SpecialModelRenderer<T>, transformation: Matrix4fc): void;
    submit(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, outlineColor: number): void;
    // private submitModel(renderType: RenderType, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, outlineColor: number): void;
    submitOnlyOutline(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, outlineColor: number): void;
    submitWithZOffset(poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, overlayCoords: number, outlineColor: number): void;
    tintLayers(): (Object | null)[];
}