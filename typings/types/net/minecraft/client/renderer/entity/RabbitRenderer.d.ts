import type { RabbitModel } from '../../../../../net/minecraft/client/model/animal/rabbit/RabbitModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { RabbitRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/RabbitRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Rabbit } from '../../../../../net/minecraft/world/entity/animal/rabbit/Rabbit.d.ts'
export class RabbitRenderer extends AgeableMobRenderer<Rabbit, RabbitRenderState, RabbitModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): RabbitRenderState;
    createRenderState(entity: Rabbit, partialTicks: number): RabbitRenderState;
    extractRenderState(entity: Rabbit, state: RabbitRenderState, partialTicks: number): void;
    getTextureLocation(state: RabbitRenderState): Identifier;
}