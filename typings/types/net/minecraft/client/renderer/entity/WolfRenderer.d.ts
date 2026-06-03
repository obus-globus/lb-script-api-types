import type { WolfModel } from '../../../../../net/minecraft/client/model/animal/wolf/WolfModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { WolfRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/WolfRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Wolf } from '../../../../../net/minecraft/world/entity/animal/wolf/Wolf.d.ts'
export class WolfRenderer extends AgeableMobRenderer<Wolf, WolfRenderState, WolfModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): WolfRenderState;
    createRenderState(entity: Wolf, partialTicks: number): WolfRenderState;
    extractRenderState(entity: Wolf, state: WolfRenderState, partialTicks: number): void;
    getModelTint(state: WolfRenderState): number;
    getTextureLocation(state: WolfRenderState): Identifier;
}