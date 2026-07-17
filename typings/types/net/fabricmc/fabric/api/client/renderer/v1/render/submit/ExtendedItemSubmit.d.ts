import type { PoseStack$Pose } from '../../../../../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { MeshView } from '../../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MeshView.d.ts'
import type { FeatureRendererType } from '../../../../../../../../../net/minecraft/client/renderer/feature/FeatureRendererType.d.ts'
import type { TranslucentSubmit } from '../../../../../../../../../net/minecraft/client/renderer/feature/submit/TranslucentSubmit.d.ts'
import type { ItemStackRenderState$FoilType } from '../../../../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState$FoilType.d.ts'
import type { BakedQuad } from '../../../../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { ItemDisplayContext } from '../../../../../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
export class ExtendedItemSubmit extends Record implements TranslucentSubmit {
    static TYPE: FeatureRendererType<ExtendedItemSubmit>;
    constructor(pose: PoseStack$Pose, displayContext: ItemDisplayContext, lightCoords: number, overlayCoords: number, outlineColor: number, tintLayers: number[], quads: BakedQuad[], mesh: MeshView, foilType: ItemStackRenderState$FoilType)
    // private displayContext: ItemDisplayContext;
    // private foilType: ItemStackRenderState$FoilType;
    // private lightCoords: number;
    // private mesh: MeshView;
    // private outlineColor: number;
    // private overlayCoords: number;
    // private pose: PoseStack$Pose;
    // private quads: BakedQuad[];
    // private tintLayers: number[];
    displayContext(): ItemDisplayContext;
    distanceToCameraSq(): number;
    equals(arg0: Object | null): boolean;
    featureType(): FeatureRendererType<TranslucentSubmit>;
    foilType(): ItemStackRenderState$FoilType;
    hasTranslucency(): boolean;
    hashCode(): number;
    lightCoords(): number;
    mesh(): MeshView;
    outlineColor(): number;
    overlayCoords(): number;
    pose(): PoseStack$Pose;
    quads(): BakedQuad[];
    tintLayers(): number[];
    toString(): string;
}