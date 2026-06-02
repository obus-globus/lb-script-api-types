import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { SpiderRenderer } from '../../../../../net/minecraft/client/renderer/entity/SpiderRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { CaveSpider } from '../../../../../net/minecraft/world/entity/monster/spider/CaveSpider.d.ts'
export class CaveSpiderRenderer extends SpiderRenderer<CaveSpider> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    getTextureLocation(state: LivingEntityRenderState): Identifier;
}