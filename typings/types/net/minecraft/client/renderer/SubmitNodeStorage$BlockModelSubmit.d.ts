import type { PoseStack$Pose } from '../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockStateModelPart } from '../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { RenderType } from '../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class SubmitNodeStorage$BlockModelSubmit extends Record {
    // private lightCoords: number;
    // private modelParts: BlockStateModelPart[];
    // private outlineColor: number;
    // private overlayCoords: number;
    // private pose: PoseStack$Pose;
    // private renderType: RenderType;
    // private tintLayers: number[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    lightCoords(): number;
    modelParts(): BlockStateModelPart[];
    outlineColor(): number;
    overlayCoords(): number;
    pose(): PoseStack$Pose;
    renderType(): RenderType;
    tintLayers(): number[];
    toString(): string;
}