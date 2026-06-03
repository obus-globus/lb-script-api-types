import type { WitchModel } from '../../../../../net/minecraft/client/model/monster/witch/WitchModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { WitchRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/WitchRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Witch } from '../../../../../net/minecraft/world/entity/monster/Witch.d.ts'
export class WitchRenderer extends MobRenderer<Witch, WitchRenderState, WitchModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): WitchRenderState;
    createRenderState(entity: Witch, partialTicks: number): WitchRenderState;
    extractRenderState(entity: Witch, state: WitchRenderState, partialTicks: number): void;
    getTextureLocation(state: WitchRenderState): Identifier;
}