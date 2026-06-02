import type { EntityModel } from '../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/LivingEntityRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Mob } from '../../../../../net/minecraft/world/entity/Mob.d.ts'
export abstract class MobRenderer<T extends Mob, S extends LivingEntityRenderState, M extends EntityModel<S>> extends LivingEntityRenderer<T, S, M> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, model: M, shadow: number)
    getShadowRadius(state: S): number;
    shouldShowName(entity: T, distanceToCameraSq: number): boolean;
}