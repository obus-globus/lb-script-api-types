import type { BlockEntityRenderState } from '../../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { CopperGolemStatueBlock$Pose } from '../../../../../../net/minecraft/world/level/block/CopperGolemStatueBlock$Pose.d.ts'
import type { WeatheringCopper$WeatherState } from '../../../../../../net/minecraft/world/level/block/WeatheringCopper$WeatherState.d.ts'
import type { BlockEntity } from '../../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class CopperGolemStatueRenderState extends BlockEntityRenderState {
    static extractBase(paramblockEntity: BlockEntity, paramstate: BlockEntityRenderState, parambreakProgress: ModelFeatureRenderer$CrumblingOverlay): void;
    constructor()
    direction: Direction;
    oxidationState: WeatheringCopper$WeatherState;
    pose: CopperGolemStatueBlock$Pose;
}