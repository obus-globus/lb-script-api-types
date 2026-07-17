import type { PoseStack$Pose } from '../../../../../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Mesh } from '../../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/Mesh.d.ts'
import type { ModelStorage } from '../../../../../../../../../net/irisshaders/iris/mixinterface/ModelStorage.d.ts'
import type { BlockStateModelPart } from '../../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { ChunkSectionLayer } from '../../../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { FeatureRendererType } from '../../../../../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { TranslucentSubmit } from '../../../../../../../../../net/minecraft/client/renderer/feature/submit/TranslucentSubmit.d.ts'
import type { RenderType } from '../../../../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class ExtendedBlockModelSubmit extends Record implements ModelStorage, TranslucentSubmit {
    static TYPE: FeatureRendererType<ExtendedBlockModelSubmit>;
    constructor(pose: PoseStack$Pose, renderTypeFunction: (param0: ChunkSectionLayer) => RenderType, modelParts: BlockStateModelPart[], mesh: Mesh, tintLayers: number[], lightCoords: number, overlayCoords: number, tintColor: number, sheetedDecalPose: PoseStack$Pose)
    // private beId: number;
    // private entityId: number;
    // private isRenderingBEs: boolean;
    // private itemId: number;
    // private lightCoords: number;
    // private mesh: Mesh;
    // private modelParts: BlockStateModelPart[];
    // private overlayCoords: number;
    // private pose: PoseStack$Pose;
    // private renderTypeFunction: (param0: ChunkSectionLayer) => RenderType;
    // private sheetedDecalPose: PoseStack$Pose;
    // private tintColor: number;
    // private tintLayers: number[];
    distanceToCameraSq(): number;
    equals(arg0: Object | null): boolean;
    featureType(): FeatureRendererType<TranslucentSubmit>;
    hashCode(): number;
    iris$capture(): void;
    iris$set(): void;
    iris$wasBE(): boolean;
    lightCoords(): number;
    mesh(): Mesh;
    modelParts(): BlockStateModelPart[];
    overlayCoords(): number;
    pose(): PoseStack$Pose;
    renderTypeFunction(): (param0: ChunkSectionLayer) => RenderType;
    sheetedDecalPose(): PoseStack$Pose;
    tintColor(): number;
    tintLayers(): number[];
    toString(): string;
}