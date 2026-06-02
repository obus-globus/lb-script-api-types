import type { PoseStack$Pose } from '../../../../../../../../com/mojang/blaze3d/vertex/PoseStack$Pose.d.ts'
import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Mesh } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/Mesh.d.ts'
import type { BlockStateModelPart } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { ChunkSectionLayer } from '../../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { RenderType } from '../../../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
export class FabricSubmitNodeCollection$ExtendedBlockModelSubmit extends Record {
    // private lightCoords: number;
    // private mesh: Mesh;
    // private modelParts: BlockStateModelPart[];
    // private outlineColor: number;
    // private overlayCoords: number;
    // private pose: PoseStack$Pose;
    // private renderTypeFunction: (param0: ChunkSectionLayer) => RenderType;
    // private tintLayers: number[];
    // private translucent: boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    lightCoords(): number;
    mesh(): Mesh;
    modelParts(): BlockStateModelPart[];
    outlineColor(): number;
    overlayCoords(): number;
    pose(): PoseStack$Pose;
    renderTypeFunction(): (param0: ChunkSectionLayer) => RenderType;
    tintLayers(): number[];
    toString(): string;
    translucent(): boolean;
}