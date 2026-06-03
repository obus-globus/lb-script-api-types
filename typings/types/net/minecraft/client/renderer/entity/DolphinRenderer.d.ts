import type { DolphinModel } from '../../../../../net/minecraft/client/model/animal/dolphin/DolphinModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { DolphinRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/DolphinRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Dolphin } from '../../../../../net/minecraft/world/entity/animal/dolphin/Dolphin.d.ts'
export class DolphinRenderer extends AgeableMobRenderer<Dolphin, DolphinRenderState, DolphinModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): DolphinRenderState;
    createRenderState(entity: Dolphin, partialTicks: number): DolphinRenderState;
    extractRenderState(entity: Dolphin, state: DolphinRenderState, partialTicks: number): void;
    getTextureLocation(state: DolphinRenderState): Identifier;
}