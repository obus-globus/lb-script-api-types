import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { IllagerRenderer } from '../../../../../net/minecraft/client/renderer/entity/IllagerRenderer.d.ts'
import type { EvokerRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EvokerRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SpellcasterIllager } from '../../../../../net/minecraft/world/entity/monster/illager/SpellcasterIllager.d.ts'
export class EvokerRenderer<T extends SpellcasterIllager> extends IllagerRenderer<T, EvokerRenderState> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): EvokerRenderState;
    createRenderState(entity: T, partialTicks: number): EvokerRenderState;
    extractRenderState(entity: T, state: EvokerRenderState, partialTicks: number): void;
    getTextureLocation(state: EvokerRenderState): Identifier;
}