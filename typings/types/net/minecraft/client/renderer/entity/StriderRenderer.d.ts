import type { StriderModel } from '../../../../../net/minecraft/client/model/monster/strider/StriderModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { StriderRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/StriderRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Strider } from '../../../../../net/minecraft/world/entity/monster/Strider.d.ts'
export class StriderRenderer extends AgeableMobRenderer<Strider, StriderRenderState, StriderModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): StriderRenderState;
    extractRenderState(entity: Strider, state: StriderRenderState, partialTicks: number): void;
    getShadowRadius(state: StriderRenderState): number;
    getTextureLocation(state: StriderRenderState): Identifier;
    isShaking(state: StriderRenderState): boolean;
}