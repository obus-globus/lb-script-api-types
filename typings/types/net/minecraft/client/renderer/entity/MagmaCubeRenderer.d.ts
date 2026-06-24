import type { MagmaCubeModel } from '../../../../../net/minecraft/client/model/monster/slime/MagmaCubeModel.d.ts'
import type { AbstractCubeMobRenderer } from '../../../../../net/minecraft/client/renderer/entity/AbstractCubeMobRenderer.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { SlimeRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/SlimeRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { MagmaCube } from '../../../../../net/minecraft/world/entity/monster/cubemob/MagmaCube.d.ts'
export class MagmaCubeRenderer extends AbstractCubeMobRenderer<MagmaCube, SlimeRenderState, MagmaCubeModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): SlimeRenderState;
    createRenderState(entity: MagmaCube, partialTicks: number): SlimeRenderState;
    getBlockLightLevel(entity: MagmaCube, blockPos: BlockPos): number;
    getTextureLocation(state: SlimeRenderState): Identifier;
}