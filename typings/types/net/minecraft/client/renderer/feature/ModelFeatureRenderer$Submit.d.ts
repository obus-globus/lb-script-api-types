import type { PoseStack$Pose } from '../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelStorage } from '../../../../../net/irisshaders/iris/mixinterface/ModelStorage.d.ts'
import type { Model } from '../../../../../net/minecraft/client/model/Model.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { BatchableSubmit } from '../../../../../net/minecraft/client/renderer/feature/submit/BatchableSubmit.d.ts'
import type { TranslucentSubmit } from '../../../../../net/minecraft/client/renderer/feature/submit/TranslucentSubmit.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { TextureAtlasSprite } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class ModelFeatureRenderer$Submit<S extends unknown> extends Record implements ModelStorage, BatchableSubmit, TranslucentSubmit {
    static computeDistanceToCameraSq(parampose: Matrix4fc): number;
    static computeDistanceToCameraSq(parampose: Matrix4fc, paramoriginX: number, paramoriginY: number, paramoriginZ: number): number;
    constructor(renderType: RenderType, pose: PoseStack$Pose, model: Model<S>, state: S, lightCoords: number, overlayCoords: number, tintedColor: number, sprite: TextureAtlasSprite, sheetedDecalPose: PoseStack$Pose)
    // private beId: number;
    // private entityId: number;
    // private isRenderingBEs: boolean;
    // private itemId: number;
    // private lightCoords: number;
    // private model: Model<S>;
    // private overlayCoords: number;
    // private pose: PoseStack$Pose;
    // private renderType: RenderType;
    // private sheetedDecalPose: PoseStack$Pose;
    // private sprite: TextureAtlasSprite;
    // private state: S;
    // private tintedColor: number;
    batchKey(): Object;
    distanceToCameraSq(): number;
    equals(o: Object | null): boolean;
    featureType(): FeatureRendererType<ModelFeatureRenderer$Submit<S>>;
    hashCode(): number;
    iris$capture(): void;
    iris$set(): void;
    iris$wasBE(): boolean;
    lightCoords(): number;
    model(): Model<S>;
    overlayCoords(): number;
    pose(): PoseStack$Pose;
    renderType(): RenderType;
    sheetedDecalPose(): PoseStack$Pose;
    sprite(): TextureAtlasSprite;
    state(): S;
    tintedColor(): number;
    toString(): string;
}