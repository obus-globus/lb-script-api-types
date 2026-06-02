import type { BreezeModel } from '../../../../../net/minecraft/client/model/monster/breeze/BreezeModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { BreezeRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/BreezeRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Breeze } from '../../../../../net/minecraft/world/entity/monster/breeze/Breeze.d.ts'
export class BreezeRenderer extends MobRenderer<Breeze, BreezeRenderState, BreezeModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): BreezeRenderState;
    extractRenderState(entity: Breeze, state: BreezeRenderState, partialTicks: number): void;
    getTextureLocation(state: BreezeRenderState): Identifier;
}