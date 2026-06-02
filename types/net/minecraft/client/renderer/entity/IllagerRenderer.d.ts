import type { IllagerModel } from '../../../../../net/minecraft/client/model/monster/illager/IllagerModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { IllagerRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/IllagerRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { AbstractIllager } from '../../../../../net/minecraft/world/entity/monster/illager/AbstractIllager.d.ts'
export abstract class IllagerRenderer<T extends AbstractIllager, S extends IllagerRenderState> extends MobRenderer<T, S, IllagerModel<S>> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, model: IllagerModel<S>, shadow: number)
    extractRenderState(entity: T, state: S, partialTicks: number): void;
}