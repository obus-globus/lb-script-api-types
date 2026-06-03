import type { HumanoidModel } from '../../../../../net/minecraft/client/model/HumanoidModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { ZombieRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/ZombieRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Giant } from '../../../../../net/minecraft/world/entity/monster/Giant.d.ts'
export class GiantMobRenderer extends MobRenderer<Giant, ZombieRenderState, HumanoidModel<ZombieRenderState>> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, scale: number)
    createRenderState(): ZombieRenderState;
    createRenderState(entity: Giant, partialTicks: number): ZombieRenderState;
    extractRenderState(entity: Giant, state: ZombieRenderState, partialTicks: number): void;
    getTextureLocation(state: ZombieRenderState): Identifier;
}