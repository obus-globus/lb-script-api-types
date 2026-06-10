import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BlockUtil$FoundRectangle } from '../../../../../net/minecraft/util/BlockUtil$FoundRectangle.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityDimensions } from '../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PortalShape extends Object {
    static MAX_HEIGHT: number;
    static MAX_WIDTH: number;
    static findAnyShape(paramlevel: BlockGetter, parampos: BlockPos, paramaxis: Direction$Axis): PortalShape;
    static findCollisionFreePosition(parambottomCenter: Vec3, paramserverLevel: ServerLevel, paramentity: Entity, paramdimensions: EntityDimensions): Vec3;
    static findEmptyPortalShape(paramlevel: LevelAccessor, parampos: BlockPos, parampreferredAxis: Direction$Axis): Optional<PortalShape>;
    static findPortalShape(paramlevel: LevelAccessor, parampos: BlockPos, paramisValid: (param0: PortalShape) => boolean, parampreferredAxis: Direction$Axis): Optional<PortalShape>;
    static getRelativePosition(paramlargestRectangleAround: BlockUtil$FoundRectangle, paramaxis: Direction$Axis, paramposition: Vec3, paramdimensions: EntityDimensions): Vec3;
    private constructor(axis: Direction$Axis, portalBlockCount: number, rightDir: Direction, bottomLeft: BlockPos, width: number, height: number)
    // private axis: Direction$Axis;
    // private bottomLeft: BlockPos;
    // private height: number;
    // private numPortalBlocks: number;
    // private rightDir: Direction;
    // private width: number;
    createPortalBlocks(level: LevelAccessor): void;
    isComplete(): boolean;
    isValid(): boolean;
}