import type { SnifferModel } from '../../../../../net/minecraft/client/model/animal/sniffer/SnifferModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { SnifferRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/SnifferRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Sniffer } from '../../../../../net/minecraft/world/entity/animal/sniffer/Sniffer.d.ts'
import type { AABB } from '../../../../../net/minecraft/world/phys/AABB.d.ts'
export class SnifferRenderer extends AgeableMobRenderer<Sniffer, SnifferRenderState, SnifferModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): SnifferRenderState;
    createRenderState(entity: Sniffer, partialTicks: number): SnifferRenderState;
    extractRenderState(entity: Sniffer, state: SnifferRenderState, partialTicks: number): void;
    getBoundingBoxForCulling(entity: Sniffer): AABB;
    getTextureLocation(state: SnifferRenderState): Identifier;
}