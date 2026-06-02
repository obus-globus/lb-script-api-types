import type { AbstractFelineModel } from '../../../../../net/minecraft/client/model/animal/feline/AbstractFelineModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { FelineRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/FelineRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Ocelot } from '../../../../../net/minecraft/world/entity/animal/feline/Ocelot.d.ts'
export class OcelotRenderer extends AgeableMobRenderer<Ocelot, FelineRenderState, AbstractFelineModel<FelineRenderState>> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): FelineRenderState;
    extractRenderState(entity: Ocelot, state: FelineRenderState, partialTicks: number): void;
    getTextureLocation(state: FelineRenderState): Identifier;
}