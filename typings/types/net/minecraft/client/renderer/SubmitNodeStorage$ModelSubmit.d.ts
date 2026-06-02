import type { PoseStack$Pose } from '../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ModelStorage } from '../../../../net/irisshaders/iris/mixinterface/ModelStorage.d.ts'
import type { Model } from '../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { TextureAtlasSprite } from '../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
export class SubmitNodeStorage$ModelSubmit<S extends Object | number | string | boolean> extends Record implements ModelStorage {
    // private beId: number;
    // private crumblingOverlay: ModelFeatureRenderer$CrumblingOverlay;
    // private entityId: number;
    // private isRenderingBEs: boolean;
    // private itemId: number;
    // private lightCoords: number;
    // private model: Model<S>;
    // private outlineColor: number;
    // private overlayCoords: number;
    // private pose: PoseStack$Pose;
    // private sprite: TextureAtlasSprite;
    // private state: S;
    // private tintedColor: number;
    crumblingOverlay(): ModelFeatureRenderer$CrumblingOverlay;
    equals(o: Object | null): boolean;
    hashCode(): number;
    iris$capture(): void;
    iris$set(): void;
    iris$wasBE(): boolean;
    lightCoords(): number;
    model(): Model<S>;
    outlineColor(): number;
    overlayCoords(): number;
    pose(): PoseStack$Pose;
    sprite(): TextureAtlasSprite;
    state(): S;
    tintedColor(): number;
    toString(): string;
}