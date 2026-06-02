import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { TrajectoryInfo } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.d.ts'
import type { TrajectoryInfoRenderer } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfoRenderer.d.ts'
import type { TrajectoryType } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryType.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class TrajectoryInfoRenderer$Companion extends Object {
    getHypotheticalTrajectory(owner: Entity, trajectoryInfo: TrajectoryInfo, trajectoryType: TrajectoryType, rotation: Rotation, icon: ItemStack, partialTicks: number): TrajectoryInfoRenderer;
}