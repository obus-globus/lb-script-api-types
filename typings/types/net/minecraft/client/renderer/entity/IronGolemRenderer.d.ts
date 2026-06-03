import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { IronGolemModel } from '../../../../../net/minecraft/client/model/animal/golem/IronGolemModel.d.ts'
import type { BlockModelResolver } from '../../../../../net/minecraft/client/renderer/block/BlockModelResolver.d.ts'
import type { BlockDisplayContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { IronGolemRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/IronGolemRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { IronGolem } from '../../../../../net/minecraft/world/entity/animal/golem/IronGolem.d.ts'
export class IronGolemRenderer extends MobRenderer<IronGolem, IronGolemRenderState, IronGolemModel> {
    static BLOCK_DISPLAY_CONTEXT: BlockDisplayContext;
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    // private blockModelResolver: BlockModelResolver;
    createRenderState(): IronGolemRenderState;
    createRenderState(entity: IronGolem, partialTicks: number): IronGolemRenderState;
    extractRenderState(entity: IronGolem, state: IronGolemRenderState, partialTicks: number): void;
    getTextureLocation(state: IronGolemRenderState): Identifier;
    setupRotations(state: IronGolemRenderState, poseStack: PoseStack, bodyRot: number, entityScale: number): void;
}