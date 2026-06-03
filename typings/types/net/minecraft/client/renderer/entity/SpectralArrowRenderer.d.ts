import type { ArrowRenderer } from '../../../../../net/minecraft/client/renderer/entity/ArrowRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { ArrowRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ArrowRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { SpectralArrow } from '../../../../../net/minecraft/world/entity/projectile/arrow/SpectralArrow.d.ts'
export class SpectralArrowRenderer extends ArrowRenderer<SpectralArrow, ArrowRenderState> {
    static NAMETAG_SCALE: number;
    static SPECTRAL_ARROW_LOCATION: Identifier;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): ArrowRenderState;
    createRenderState(entity: SpectralArrow, partialTicks: number): ArrowRenderState;
    getTextureLocation(state: ArrowRenderState): Identifier;
}