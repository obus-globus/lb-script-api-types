import type { VillagerModel } from '../../../../../net/minecraft/client/model/npc/VillagerModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { CustomHeadLayer$Transforms } from '../../../../../net/minecraft/client/renderer/entity/layers/CustomHeadLayer$Transforms.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { VillagerRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/VillagerRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Villager } from '../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
export class VillagerRenderer extends AgeableMobRenderer<Villager, VillagerRenderState, VillagerModel> {
    static CUSTOM_HEAD_TRANSFORMS: CustomHeadLayer$Transforms;
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): VillagerRenderState;
    createRenderState(entity: Villager, partialTicks: number): VillagerRenderState;
    extractRenderState(entity: Villager, state: VillagerRenderState, partialTicks: number): void;
    getShadowRadius(state: VillagerRenderState): number;
    getTextureLocation(state: VillagerRenderState): Identifier;
}