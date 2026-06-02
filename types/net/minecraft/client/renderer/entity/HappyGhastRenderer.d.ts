import type { HappyGhastModel } from '../../../../../net/minecraft/client/model/animal/ghast/HappyGhastModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { HappyGhastRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/HappyGhastRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { HappyGhast } from '../../../../../net/minecraft/world/entity/animal/happyghast/HappyGhast.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
export class HappyGhastRenderer extends AgeableMobRenderer<HappyGhast, HappyGhastRenderState, HappyGhastModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): HappyGhastRenderState;
    extractRenderState(entity: HappyGhast, state: HappyGhastRenderState, partialTicks: number): void;
    getBoundingBoxForCulling(entity: HappyGhast): AABB;
    getTextureLocation(state: HappyGhastRenderState): Identifier;
}