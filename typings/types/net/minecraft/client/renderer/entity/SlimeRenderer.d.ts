import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { SlimeModel } from '../../../../../net/minecraft/client/model/monster/slime/SlimeModel.d.ts'
import type { AbstractCubeMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AbstractCubeMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { SlimeRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/SlimeRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Slime } from '../../../../../net/minecraft/world/entity/monster/cubemob/Slime.d.ts'
export class SlimeRenderer extends AbstractCubeMobRenderer<Slime, SlimeRenderState, SlimeModel> {
    static NAMETAG_SCALE: number;
    static SLIME_LOCATION: Identifier;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): SlimeRenderState;
    createRenderState(entity: Slime, partialTicks: number): SlimeRenderState;
    getTextureLocation(state: SlimeRenderState): Identifier;
    scale(state: SlimeRenderState, poseStack: PoseStack): void;
}