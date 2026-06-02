import type { EntityModel } from '../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { EquineRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EquineRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { AbstractHorse } from '../../../../../net/minecraft/world/entity/animal/equine/AbstractHorse.d.ts'
export abstract class AbstractHorseRenderer<T extends AbstractHorse, S extends EquineRenderState, M extends EntityModel<S>> extends AgeableMobRenderer<T, S, M> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, model: M, babyModel: M)
    extractRenderState(entity: T, state: S, partialTicks: number): void;
}