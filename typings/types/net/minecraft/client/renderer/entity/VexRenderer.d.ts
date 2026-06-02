import type { VexModel } from '../../../../../net/minecraft/client/model/monster/vex/VexModel.d.ts'
import type { EntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/entity/EntityRendererProvider$Context.d.ts'
import type { MobRenderer } from '../../../../../net/minecraft/client/renderer/entity/MobRenderer.d.ts'
import type { LivingEntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/LivingEntityRenderState.d.ts'
import type { VexRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/VexRenderState.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Vex } from '../../../../../net/minecraft/world/entity/monster/Vex.d.ts'
export class VexRenderer extends MobRenderer<Vex, VexRenderState, VexModel> {
    static NAMETAG_SCALE: number;
    static getOverlayCoords(paramstate: LivingEntityRenderState, paramwhiteOverlayProgress: number): number;
    constructor(context: EntityRendererProvider$Context)
    createRenderState(): VexRenderState;
    extractRenderState(entity: Vex, state: VexRenderState, partialTicks: number): void;
    getBlockLightLevel(entity: Vex, blockPos: BlockPos): number;
    getTextureLocation(state: VexRenderState): Identifier;
}