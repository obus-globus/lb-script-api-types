import type { GoatModel } from '../../../../../net/minecraft/client/model/animal/goat/GoatModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { GoatRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/GoatRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Goat } from '../../../../../net/minecraft/world/entity/animal/goat/Goat.d.ts'
export class GoatRenderer extends AgeableMobRenderer<Goat, GoatRenderState, GoatModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): GoatRenderState;
    createRenderState(entity: Goat, partialTicks: number): GoatRenderState;
    extractRenderState(entity: Goat, state: GoatRenderState, partialTicks: number): void;
    getTextureLocation(state: GoatRenderState): Identifier;
}