import type { HorseModel } from '../../../../../net/minecraft/client/model/animal/equine/HorseModel.d.ts'
import type { AbstractHorseRenderer } from '../../../../../net/minecraft/client/renderer/entity/AbstractHorseRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { HorseRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/HorseRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Horse } from '../../../../../net/minecraft/world/entity/animal/equine/Horse.d.ts'
export class HorseRenderer extends AbstractHorseRenderer<Horse, HorseRenderState, HorseModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): HorseRenderState;
    createRenderState(entity: Horse, partialTicks: number): HorseRenderState;
    extractRenderState(entity: Horse, state: HorseRenderState, partialTicks: number): void;
    getTextureLocation(state: HorseRenderState): Identifier;
}