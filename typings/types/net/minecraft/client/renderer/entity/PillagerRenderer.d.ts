import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { IllagerRenderer } from '../../../../../net/minecraft/client/renderer/entity/IllagerRenderer.d.ts'
import type { IllagerRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/IllagerRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Pillager } from '../../../../../net/minecraft/world/entity/monster/illager/Pillager.d.ts'
export class PillagerRenderer extends IllagerRenderer<Pillager, IllagerRenderState> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): IllagerRenderState;
    createRenderState(entity: Pillager, partialTicks: number): IllagerRenderState;
    getTextureLocation(state: IllagerRenderState): Identifier;
}