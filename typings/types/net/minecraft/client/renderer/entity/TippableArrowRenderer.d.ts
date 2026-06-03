import type { ArrowRenderer } from '../../../../../net/minecraft/client/renderer/entity/ArrowRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { TippableArrowRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/TippableArrowRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Arrow } from '../../../../../net/minecraft/world/entity/projectile/arrow/Arrow.d.ts'
export class TippableArrowRenderer extends ArrowRenderer<Arrow, TippableArrowRenderState> {
    static NAMETAG_SCALE: number;
    static NORMAL_ARROW_LOCATION: Identifier;
    static TIPPED_ARROW_LOCATION: Identifier;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): TippableArrowRenderState;
    createRenderState(entity: Arrow, partialTicks: number): TippableArrowRenderState;
    extractRenderState(entity: Arrow, state: TippableArrowRenderState, partialTicks: number): void;
    getTextureLocation(state: TippableArrowRenderState): Identifier;
}