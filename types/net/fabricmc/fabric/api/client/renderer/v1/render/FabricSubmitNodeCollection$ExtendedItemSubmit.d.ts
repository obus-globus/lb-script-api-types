import type { PoseStack$Pose } from '../../../../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MeshView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MeshView.d.ts'
import type { ItemStackRenderState$FoilType } from '../../../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState$FoilType.d.ts'
import type { BakedQuad } from '../../../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { ItemDisplayContext } from '../../../../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
export class FabricSubmitNodeCollection$ExtendedItemSubmit extends Record {
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
    equals(arg0: Object | null): boolean;
    foilType(): ItemStackRenderState$FoilType;
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