import type { VillagerModel } from '../../../../../net/minecraft/client/model/npc/VillagerModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { VillagerRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/VillagerRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { WanderingTrader } from '../../../../../net/minecraft/world/entity/npc/wanderingtrader/WanderingTrader.d.ts'
export class WanderingTraderRenderer extends MobRenderer<WanderingTrader, VillagerRenderState, VillagerModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): VillagerRenderState;
    extractRenderState(entity: WanderingTrader, state: VillagerRenderState, partialTicks: number): void;
    getTextureLocation(state: VillagerRenderState): Identifier;
}