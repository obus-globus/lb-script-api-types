import type { LlamaModel } from '../../../../../net/minecraft/client/model/animal/llama/LlamaModel.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { AgeableMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AgeableMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { LlamaRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LlamaRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Llama } from '../../../../../net/minecraft/world/entity/animal/equine/Llama.d.ts'
export class LlamaRenderer extends AgeableMobRenderer<Llama, LlamaRenderState, LlamaModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context, model: ModelLayerLocation, babyModel: ModelLayerLocation)
    createRenderState(): LlamaRenderState;
    extractRenderState(entity: Llama, state: LlamaRenderState, partialTicks: number): void;
    getTextureLocation(state: LlamaRenderState): Identifier;
}