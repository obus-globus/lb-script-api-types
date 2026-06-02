import type { CamelModel } from '../../../../../net/minecraft/client/model/animal/camel/CamelModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { CamelRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/CamelRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Camel } from '../../../../../net/minecraft/world/entity/animal/camel/Camel.d.ts'
export class CamelRenderer extends AgeableMobRenderer<Camel, CamelRenderState, CamelModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): CamelRenderState;
    extractRenderState(entity: Camel, state: CamelRenderState, partialTicks: number): void;
    getTextureLocation(state: CamelRenderState): Identifier;
}