import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { HoglinModel } from '../../../../../net/minecraft/client/model/monster/hoglin/HoglinModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { HoglinRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/HoglinRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
import type { HoglinBase } from '../../../../../net/minecraft/world/entity/monster/hoglin/HoglinBase.d.ts'
export abstract class AbstractHoglinRenderer<T extends Mob & HoglinBase> extends AgeableMobRenderer<T, HoglinRenderState, HoglinModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, adultLayer: ModelLayerLocation, babyLayer: ModelLayerLocation, shadow: number)
    createRenderState(): HoglinRenderState;
    extractRenderState(entity: T, state: HoglinRenderState, partialTicks: number): void;
}