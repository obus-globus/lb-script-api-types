import type { PoseStack } from '../../../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Function } from '../../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Mesh } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/Mesh.d.ts'
import type { MeshView } from '../../../../../../../../net/fabricmc/fabric/api/client/renderer/v1/mesh/MeshView.d.ts'
import type { BlockStateModelPart } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { ChunkSectionLayer } from '../../../../../../../../net/minecraft/client/renderer/chunk/ChunkSectionLayer.d.ts'
import type { ItemStackRenderState$FoilType } from '../../../../../../../../net/minecraft/client/renderer/item/ItemStackRenderState$FoilType.d.ts'
import type { RenderType } from '../../../../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { BakedQuad } from '../../../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { ItemDisplayContext } from '../../../../../../../../net/minecraft/world/item/ItemDisplayContext.d.ts'
export interface FabricOrderedSubmitNodeCollector extends Object{
    submitBlockModel(arg0: PoseStack, arg1: (param0: ChunkSectionLayer) => RenderType, arg2: boolean, arg3: BlockStateModelPart[], arg4: Mesh, arg5: number[], arg6: number, arg7: number, arg8: number): void;
    submitItem(arg0: PoseStack, arg1: ItemDisplayContext, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: BakedQuad[], arg7: MeshView, arg8: ItemStackRenderState$FoilType): void;
}