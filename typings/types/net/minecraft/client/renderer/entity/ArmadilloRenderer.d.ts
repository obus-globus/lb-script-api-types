import type { ArmadilloModel } from '../../../../../net/minecraft/client/model/animal/armadillo/ArmadilloModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { ArmadilloRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ArmadilloRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Armadillo } from '../../../../../net/minecraft/world/entity/animal/armadillo/Armadillo.d.ts'
export class ArmadilloRenderer extends AgeableMobRenderer<Armadillo, ArmadilloRenderState, ArmadilloModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): ArmadilloRenderState;
    createRenderState(entity: Armadillo, partialTicks: number): ArmadilloRenderState;
    extractRenderState(entity: Armadillo, state: ArmadilloRenderState, partialTicks: number): void;
    getTextureLocation(state: ArmadilloRenderState): Identifier;
}