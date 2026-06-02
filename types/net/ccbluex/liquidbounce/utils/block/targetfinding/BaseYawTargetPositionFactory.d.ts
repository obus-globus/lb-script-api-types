import type { FaceTargetPositionFactory } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/FaceTargetPositionFactory.d.ts'
import type { PositionFactoryConfiguration } from '../../../../../../net/ccbluex/liquidbounce/utils/block/targetfinding/PositionFactoryConfiguration.d.ts'
import type { AlignedFace } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/AlignedFace.d.ts'
import type { LineSegment } from '../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/LineSegment.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export abstract class BaseYawTargetPositionFactory extends FaceTargetPositionFactory {
    constructor(config: PositionFactoryConfiguration, yawTolerance: number)
    // private config: PositionFactoryConfiguration;
    // private /*not mapped: */ getConfig(): PositionFactoryConfiguration;
    // private yawTolerance: number;
    protected aimAtNearestPointToRotationLine(targetPos: BlockPos, face: AlignedFace): Vec3;
    protected aimAtNearestPointToYaw(targetPos: BlockPos, face: AlignedFace): Vec3 | null;
    // private calculateYaw(point: Vec3): number;
    // private calculateYawDifference(point: Vec3, targetYaw: number): number;
    // private findClosestPointToYaw(lineSegment: LineSegment, targetYaw: number): Vec3;
    protected getAngle(): number;
    producePositionOnFace(face: AlignedFace, targetPos: BlockPos): Vec3;
}