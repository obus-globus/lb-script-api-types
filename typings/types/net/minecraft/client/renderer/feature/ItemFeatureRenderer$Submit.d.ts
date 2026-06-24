import type { PoseStack$Pose } from '../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelStorage } from '../../../../../net/irisshaders/iris/mixinterface/ModelStorage.d.ts'
import type { FeatureRendererType } from '../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { TranslucentSubmit } from '../../../../../net/minecraft/client/renderer/feature/submit/TranslucentSubmit.d.ts'
import type { ItemStackRenderState$FoilType } from '../../../../../net/minecraft/client/renderer/item/ItemStackRenderState$FoilType.d.ts'
import type { BakedQuad } from '../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { ItemDisplayContext } from '../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class ItemFeatureRenderer$Submit extends Record implements ModelStorage, TranslucentSubmit {
    static computeDistanceToCameraSq(parampose: Matrix4fc): number;
    static computeDistanceToCameraSq(parampose: Matrix4fc, paramoriginX: number, paramoriginY: number, paramoriginZ: number): number;
    constructor(pose: PoseStack$Pose, displayContext: ItemDisplayContext, lightCoords: number, overlayCoords: number, outlineColor: number, tintLayers: number[], quads: BakedQuad[], foilType: ItemStackRenderState$FoilType)
    // private beId: number;
    // private displayContext: ItemDisplayContext;
    // private entityId: number;
    // private foilType: ItemStackRenderState$FoilType;
    // private isRenderingBEs: boolean;
    // private itemId: number;
    // private lightCoords: number;
    // private outlineColor: number;
    // private overlayCoords: number;
    // private pose: PoseStack$Pose;
    // private quads: BakedQuad[];
    // private tintLayers: number[];
    displayContext(): ItemDisplayContext;
    distanceToCameraSq(): number;
    equals(o: Object | null): boolean;
    featureType(): FeatureRendererType<ItemFeatureRenderer$Submit>;
    foilType(): ItemStackRenderState$FoilType;
    hasTranslucency(): boolean;
    hashCode(): number;
    iris$capture(): void;
    iris$set(): void;
    iris$wasBE(): boolean;
    lightCoords(): number;
    outlineColor(): number;
    overlayCoords(): number;
    pose(): PoseStack$Pose;
    quads(): BakedQuad[];
    tintLayers(): number[];
    toString(): string;
}