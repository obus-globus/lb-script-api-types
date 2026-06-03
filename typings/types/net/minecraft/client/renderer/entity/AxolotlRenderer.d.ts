import type { EntityModel } from '../../../../../net/minecraft/client/model/EntityModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { AxolotlRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/AxolotlRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Axolotl } from '../../../../../net/minecraft/world/entity/animal/axolotl/Axolotl.d.ts'
export class AxolotlRenderer extends AgeableMobRenderer<Axolotl, AxolotlRenderState, EntityModel<AxolotlRenderState>> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): AxolotlRenderState;
    createRenderState(entity: Axolotl, partialTicks: number): AxolotlRenderState;
    extractRenderState(entity: Axolotl, state: AxolotlRenderState, partialTicks: number): void;
    getTextureLocation(state: AxolotlRenderState): Identifier;
}