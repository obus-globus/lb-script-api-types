import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockModelRenderState } from '../../../../../net/minecraft/client/renderer/block/BlockModelRenderState.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { AbstractMinecartRenderer } from '../../../../../net/minecraft/client/renderer/entity/AbstractMinecartRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MinecartTntRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/MinecartTntRenderState.d.ts'
import type { MinecartTNT } from '../../../../../net/minecraft/world/entity/vehicle/minecart/MinecartTNT.d.ts'
export class TntMinecartRenderer extends AbstractMinecartRenderer<MinecartTNT, MinecartTntRenderState> {
    static BLOCK_DISPLAY_CONTEXT: BlockDisplayContext;
    static NAMETAG_SCALE: number;
    static submitWhiteSolidBlock(paramblockModel: BlockModelRenderState, paramposeStack: PoseStack, paramsubmitNodeCollector: SubmitNodeCollector, paramlightCoords: number, paramwhite: boolean, paramoutlineColor: number): void;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): MinecartTntRenderState;
    extractRenderState(entity: MinecartTNT, state: MinecartTntRenderState, partialTicks: number): void;
    submitMinecartContents(state: MinecartTntRenderState, blockModel: BlockModelRenderState, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number): void;
}