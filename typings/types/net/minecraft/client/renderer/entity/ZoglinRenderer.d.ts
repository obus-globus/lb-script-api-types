import type { AbstractHoglinRenderer } from '../../../../../net/minecraft/client/renderer/entity/AbstractHoglinRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { HoglinRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/HoglinRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Zoglin } from '../../../../../net/minecraft/world/entity/monster/Zoglin.d.ts'
export class ZoglinRenderer extends AbstractHoglinRenderer<Zoglin> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    getTextureLocation(state: HoglinRenderState): Identifier;
}