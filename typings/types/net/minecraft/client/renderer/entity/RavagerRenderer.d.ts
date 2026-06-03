import type { RavagerModel } from '../../../../../net/minecraft/client/model/monster/ravager/RavagerModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { RavagerRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/RavagerRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Ravager } from '../../../../../net/minecraft/world/entity/monster/Ravager.d.ts'
export class RavagerRenderer extends MobRenderer<Ravager, RavagerRenderState, RavagerModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): RavagerRenderState;
    createRenderState(entity: Ravager, partialTicks: number): RavagerRenderState;
    extractRenderState(entity: Ravager, state: RavagerRenderState, partialTicks: number): void;
    getTextureLocation(state: RavagerRenderState): Identifier;
}