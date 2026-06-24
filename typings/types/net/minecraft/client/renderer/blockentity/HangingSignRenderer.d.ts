import type { AbstractSignRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/AbstractSignRenderer.d.ts'
import type { BlockEntityRendererProvider$Context } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRendererProvider$Context.d.ts'
import type { WallAndGroundTransformations } from '../../../../../net/minecraft/client/renderer/blockentity/WallAndGroundTransformations.d.ts'
import type { HangingSignRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/HangingSignRenderState.d.ts'
import type { SignRenderState$SignTransformations } from '../../../../../net/minecraft/client/renderer/blockentity/state/SignRenderState$SignTransformations.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { SignBlockEntity } from '../../../../../net/minecraft/world/level/block/entity/SignBlockEntity.d.ts'
import type { SignText } from '../../../../../net/minecraft/world/level/block/entity/SignText.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class HangingSignRenderer extends AbstractSignRenderer<HangingSignRenderState> {
    static TRANSFORMATIONS: WallAndGroundTransformations<SignRenderState$SignTransformations>;
    static getDarkColor(paramsignText: SignText): number;
    constructor(context: BlockEntityRendererProvider$Context)
    createRenderState(): HangingSignRenderState;
    extractRenderState(blockEntity: SignBlockEntity, state: HangingSignRenderState, partialTicks: number, cameraPosition: Vec3, breakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
}