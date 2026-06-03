import type { BeeModel } from '../../../../../net/minecraft/client/model/animal/bee/BeeModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { BeeRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/BeeRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Bee } from '../../../../../net/minecraft/world/entity/animal/bee/Bee.d.ts'
export class BeeRenderer extends AgeableMobRenderer<Bee, BeeRenderState, BeeModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): BeeRenderState;
    createRenderState(entity: Bee, partialTicks: number): BeeRenderState;
    extractRenderState(entity: Bee, state: BeeRenderState, partialTicks: number): void;
    getTextureLocation(state: BeeRenderState): Identifier;
}