import type { FrogModel } from '../../../../../net/minecraft/client/model/animal/frog/FrogModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { FrogRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/FrogRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Frog } from '../../../../../net/minecraft/world/entity/animal/frog/Frog.d.ts'
export class FrogRenderer extends MobRenderer<Frog, FrogRenderState, FrogModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): FrogRenderState;
    extractRenderState(entity: Frog, state: FrogRenderState, partialTicks: number): void;
    getTextureLocation(state: FrogRenderState): Identifier;
}