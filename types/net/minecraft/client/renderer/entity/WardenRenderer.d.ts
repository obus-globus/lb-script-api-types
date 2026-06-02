import type { WardenModel } from '../../../../../net/minecraft/client/model/monster/warden/WardenModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { WardenRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/WardenRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Warden } from '../../../../../net/minecraft/world/entity/monster/warden/Warden.d.ts'
export class WardenRenderer extends MobRenderer<Warden, WardenRenderState, WardenModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): WardenRenderState;
    extractRenderState(entity: Warden, state: WardenRenderState, partialTicks: number): void;
    getTextureLocation(state: WardenRenderState): Identifier;
}