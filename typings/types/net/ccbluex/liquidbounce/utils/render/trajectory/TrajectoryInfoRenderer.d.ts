import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
import type { WorldRenderEnvironment } from '../../../../../../net/ccbluex/liquidbounce/render/WorldRenderEnvironment.d.ts'
import type { Color4b } from '../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { TrajectoryInfo } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.d.ts'
import type { TrajectoryInfoRenderer$Companion } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfoRenderer$Companion.d.ts'
import type { TrajectoryInfoRenderer$SimulationResult } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfoRenderer$SimulationResult.d.ts'
import type { TrajectoryInfoRenderer$Type } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfoRenderer$Type.d.ts'
import type { TrajectoryType } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryType.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { HitResult } from '../../../../../../net/minecraft/world/phys/HitResult.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TrajectoryInfoRenderer extends Object {
    static Companion: TrajectoryInfoRenderer$Companion;
    static getHypotheticalTrajectory(paramarg0: Entity, paramarg1: TrajectoryInfo, paramarg2: TrajectoryType, paramarg3: Rotation): TrajectoryInfoRenderer;
    static getHypotheticalTrajectory(paramarg0: Entity, paramarg1: TrajectoryInfo, paramarg2: TrajectoryType, paramarg3: Rotation, paramarg4: ItemStack): TrajectoryInfoRenderer;
    static getHypotheticalTrajectory(simulationOwner: Entity, trajectoryInfo: TrajectoryInfo, trajectoryType: TrajectoryType, rotation: Rotation, icon: ItemStack, partialTicks: number): TrajectoryInfoRenderer;
    constructor(simulationOwner: Entity, displayOwner: Entity | null, icon: ItemStack, velocity: Vec3, pos: Vec3, trajectoryInfo: TrajectoryInfo, trajectoryType: TrajectoryType, type: TrajectoryInfoRenderer$Type, renderOffset: Vec3)
    readonly displayOwner: Entity | null;
    // private hitbox: AABB;
    readonly icon: ItemStack;
    // private mutableBlockPos: BlockPos$MutableBlockPos;
    // private pos: Vec3;
    // private renderOffset: Vec3;
    readonly simulationOwner: Entity;
    readonly trajectoryInfo: TrajectoryInfo;
    readonly trajectoryType: TrajectoryType;
    readonly type: TrajectoryInfoRenderer$Type;
    // private velocity: Vec3;
    // private checkForHits(posBefore: Vec3, posAfter: Vec3): Pair<HitResult, Vec3> | null;
    drawTrajectoryForProjectile(env: WorldRenderEnvironment, maxTicks: number, partialTicks: number, trajectoryColor: Color4b, blockHitColor: Color4b | null, entityHitColor: Color4b | null, lineWidth: number): TrajectoryInfoRenderer$SimulationResult;
    runSimulation(maxTicks: number): TrajectoryInfoRenderer$SimulationResult;
}