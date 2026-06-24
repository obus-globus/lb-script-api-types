import type { PoseStack$Pose } from '../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelStorage } from '../../../../../net/irisshaders/iris/mixinterface/ModelStorage.d.ts'
import type { BlockStateModelPart } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { TranslucentSubmit } from '../../../../../net/minecraft/client/renderer/feature/submit/TranslucentSubmit.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class BlockModelFeatureRenderer$Submit extends Record implements ModelStorage, TranslucentSubmit {
    static computeDistanceToCameraSq(parampose: Matrix4fc): number;
    static computeDistanceToCameraSq(parampose: Matrix4fc, paramoriginX: number, paramoriginY: number, paramoriginZ: number): number;
    constructor(pose: PoseStack$Pose, renderType: RenderType, modelParts: BlockStateModelPart[], tintLayers: number[], lightCoords: number, overlayCoords: number, tintColor: number, sheetedDecalPose: PoseStack$Pose)
    // private beId: number;
    // private entityId: number;
    // private isRenderingBEs: boolean;
    // private itemId: number;
    // private lightCoords: number;
    // private modelParts: BlockStateModelPart[];
    // private overlayCoords: number;
    // private pose: PoseStack$Pose;
    // private renderType: RenderType;
    // private sheetedDecalPose: PoseStack$Pose;
    // private tintColor: number;
    // private tintLayers: number[];
    distanceToCameraSq(): number;
    equals(o: Object | null): boolean;
    featureType(): FeatureRendererType<BlockModelFeatureRenderer$Submit>;
    hashCode(): number;
    iris$capture(): void;
    iris$set(): void;
    iris$wasBE(): boolean;
    lightCoords(): number;
    modelParts(): BlockStateModelPart[];
    overlayCoords(): number;
    pose(): PoseStack$Pose;
    renderType(): RenderType;
    sheetedDecalPose(): PoseStack$Pose;
    tintColor(): number;
    tintLayers(): number[];
    toString(): string;
}