import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { CreeperModel } from '../../../../../net/minecraft/client/model/monster/creeper/CreeperModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { CreeperRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/CreeperRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Creeper } from '../../../../../net/minecraft/world/entity/monster/Creeper.d.ts'
export class CreeperRenderer extends MobRenderer<Creeper, CreeperRenderState, CreeperModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): CreeperRenderState;
    extractRenderState(entity: Creeper, state: CreeperRenderState, partialTicks: number): void;
    getTextureLocation(state: CreeperRenderState): Identifier;
    getWhiteOverlayProgress(state: CreeperRenderState): number;
    scale(state: CreeperRenderState, poseStack: PoseStack): void;
}