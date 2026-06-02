import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { SpiderModel } from '../../../../../net/minecraft/client/model/monster/spider/SpiderModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Spider } from '../../../../../net/minecraft/world/entity/monster/spider/Spider.d.ts'
export class SpiderRenderer<T extends Spider> extends MobRenderer<T, LivingEntityRenderState, SpiderModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    constructor(context: EntityRendererProvider$Context, model: ModelLayerLocation)
    createRenderState(): LivingEntityRenderState;
    extractRenderState(entity: T, state: LivingEntityRenderState, partialTicks: number): void;
    getFlipDegrees(): number;
    getTextureLocation(state: LivingEntityRenderState): Identifier;
}