import type { PoseStack$Pose } from '../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ModelStorage } from '../../../../net/irisshaders/iris/mixinterface/ModelStorage.d.ts'
import type { ItemStackRenderState$FoilType } from '../../../../net/minecraft/client/renderer/item/ItemStackRenderState$FoilType.d.ts'
import type { BakedQuad } from '../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { ItemDisplayContext } from '../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
export class SubmitNodeStorage$ItemSubmit extends Record implements ModelStorage {
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
    equals(o: Object | null): boolean;
    foilType(): ItemStackRenderState$FoilType;
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