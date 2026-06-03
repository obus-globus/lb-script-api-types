import type { PolarBearModel } from '../../../../../net/minecraft/client/model/animal/polarbear/PolarBearModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { PolarBearRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/PolarBearRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PolarBear } from '../../../../../net/minecraft/world/entity/animal/polarbear/PolarBear.d.ts'
export class PolarBearRenderer extends AgeableMobRenderer<PolarBear, PolarBearRenderState, PolarBearModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): PolarBearRenderState;
    createRenderState(entity: PolarBear, partialTicks: number): PolarBearRenderState;
    extractRenderState(entity: PolarBear, state: PolarBearRenderState, partialTicks: number): void;
    getTextureLocation(state: PolarBearRenderState): Identifier;
}