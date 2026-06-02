import type { AbstractHoglinRenderer } from '../../../../../net/minecraft/client/renderer/entity/AbstractHoglinRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { HoglinRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/HoglinRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Hoglin } from '../../../../../net/minecraft/world/entity/monster/hoglin/Hoglin.d.ts'
export class HoglinRenderer extends AbstractHoglinRenderer<Hoglin> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    extractRenderState(entity: Hoglin, state: HoglinRenderState, partialTicks: number): void;
    getTextureLocation(state: HoglinRenderState): Identifier;
    isShaking(state: HoglinRenderState): boolean;
}