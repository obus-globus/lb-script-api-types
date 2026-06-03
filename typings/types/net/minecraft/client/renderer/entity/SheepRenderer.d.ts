import type { SheepModel } from '../../../../../net/minecraft/client/model/animal/sheep/SheepModel.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { SheepRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/SheepRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Sheep } from '../../../../../net/minecraft/world/entity/animal/sheep/Sheep.d.ts'
export class SheepRenderer extends AgeableMobRenderer<Sheep, SheepRenderState, SheepModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): SheepRenderState;
    createRenderState(entity: Sheep, partialTicks: number): SheepRenderState;
    extractRenderState(entity: Sheep, state: SheepRenderState, partialTicks: number): void;
    getTextureLocation(state: SheepRenderState): Identifier;
}