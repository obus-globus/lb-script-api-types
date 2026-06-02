import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { Direction$Axis } from '../../../../../net/minecraft/core/Direction$Axis.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BlockUtil$FoundRectangle } from '../../../../../net/minecraft/util/BlockUtil$FoundRectangle.d.ts'
import type { WorldBorder } from '../../../../../net/minecraft/world/level/border/WorldBorder.d.ts'
export class PortalForcer extends Object {
    static TICKET_RADIUS: number;
    constructor(level: ServerLevel)
    // private level: ServerLevel;
    // private canHostFrame(origin: BlockPos, mutable: BlockPos$MutableBlockPos, direction: Direction, offset: number): boolean;
    // private canPortalReplaceBlock(pos: BlockPos$MutableBlockPos): boolean;
    createPortal(origin: BlockPos, portalAxis: Direction$Axis): Optional<BlockUtil$FoundRectangle>;
    findClosestPortalPosition(arg0: BlockPos, arg1: boolean, arg2: WorldBorder): Optional<Object>;
}