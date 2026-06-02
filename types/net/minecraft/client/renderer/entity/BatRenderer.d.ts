import type { BatModel } from '../../../../../net/minecraft/client/model/ambient/BatModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { BatRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/BatRenderState.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Bat } from '../../../../../net/minecraft/world/entity/ambient/Bat.d.ts'
export class BatRenderer extends MobRenderer<Bat, BatRenderState, BatModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): BatRenderState;
    extractRenderState(entity: Bat, state: BatRenderState, partialTicks: number): void;
    getTextureLocation(state: BatRenderState): Identifier;
}