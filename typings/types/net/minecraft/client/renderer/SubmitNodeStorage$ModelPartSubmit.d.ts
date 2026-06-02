import type { PoseStack$Pose } from '../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ModelStorage } from '../../../../net/irisshaders/iris/mixinterface/ModelStorage.d.ts'
import type { ModelPart } from '../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class SubmitNodeStorage$ModelPartSubmit extends Record implements ModelStorage {
    // private beId: number;
    // private crumblingOverlay: ModelFeatureRenderer$CrumblingOverlay;
    // private entityId: number;
    // private hasFoil: boolean;
    // private isRenderingBEs: boolean;
    // private itemId: number;
    // private lightCoords: number;
    // private modelPart: ModelPart;
    // private outlineColor: number;
    // private overlayCoords: number;
    // private pose: PoseStack$Pose;
    // private sheeted: boolean;
    // private sprite: TextureAtlasSprite;
    // private tintedColor: number;
    crumblingOverlay(): ModelFeatureRenderer$CrumblingOverlay;
    equals(o: Object | null): boolean;
    hasFoil(): boolean;
    hashCode(): number;
    iris$capture(): void;
    iris$set(): void;
    iris$wasBE(): boolean;
    lightCoords(): number;
    modelPart(): ModelPart;
    outlineColor(): number;
    overlayCoords(): number;
    pose(): PoseStack$Pose;
    sheeted(): boolean;
    sprite(): TextureAtlasSprite;
    tintedColor(): number;
    toString(): string;
}