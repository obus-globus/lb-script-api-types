import type { NautilusModel } from '../../../../../net/minecraft/client/model/animal/nautilus/NautilusModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { NautilusRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/NautilusRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { AbstractNautilus } from '../../../../../net/minecraft/world/entity/animal/nautilus/AbstractNautilus.d.ts'
export class NautilusRenderer<T extends AbstractNautilus> extends AgeableMobRenderer<T, NautilusRenderState, NautilusModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): NautilusRenderState;
    createRenderState(entity: T, partialTicks: number): NautilusRenderState;
    extractRenderState(entity: T, state: NautilusRenderState, partialTicks: number): void;
    getTextureLocation(state: NautilusRenderState): Identifier;
}