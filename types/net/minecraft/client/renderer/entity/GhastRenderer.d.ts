import type { GhastModel } from '../../../../../net/minecraft/client/model/monster/ghast/GhastModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { GhastRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/GhastRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Ghast } from '../../../../../net/minecraft/world/entity/monster/Ghast.d.ts'
export class GhastRenderer extends MobRenderer<Ghast, GhastRenderState, GhastModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): GhastRenderState;
    extractRenderState(entity: Ghast, state: GhastRenderState, partialTicks: number): void;
    getTextureLocation(state: GhastRenderState): Identifier;
}