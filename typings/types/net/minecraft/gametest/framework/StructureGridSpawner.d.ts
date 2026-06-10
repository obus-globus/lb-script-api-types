import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
import type { GameTestInfo } from '../../../../net/minecraft/gametest/framework/GameTestInfo.d.ts'
import type { GameTestRunner$StructureSpawner } from '../../../../net/minecraft/gametest/framework/GameTestRunner$StructureSpawner.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { AABB } from '../../../../net/minecraft/world/phys/AABB.d.ts'
export class StructureGridSpawner extends Object implements GameTestRunner$StructureSpawner {
    static IN_PLACE: GameTestRunner$StructureSpawner;
    static NOT_SET: GameTestRunner$StructureSpawner;
    constructor(firstTestNorthWestCorner: BlockPos, testsPerRow: number, clearOnBatch: boolean)
    // private clearOnBatch: boolean;
    // private currentRowCount: number;
    // private firstTestNorthWestCorner: BlockPos;
    // private maxX: number;
    // private nextTestNorthWestCorner: BlockPos$MutableBlockPos;
    // private rowBounds: AABB;
    // private testInLastBatch: GameTestInfo[];
    // private testsPerRow: number;
    onBatchStart(level: ServerLevel): void;
    spawnStructure(testInfo: GameTestInfo): Optional<GameTestInfo>;
}