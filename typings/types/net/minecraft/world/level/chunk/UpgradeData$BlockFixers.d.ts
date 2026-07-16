import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../net/minecraft/core/Direction.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { UpgradeData$BlockFixer } from '../../../../../net/minecraft/world/level/chunk/UpgradeData$BlockFixer.d.ts'
export class UpgradeData$BlockFixers extends Enum<UpgradeData$BlockFixers> implements UpgradeData$BlockFixer {
    static BLACKLIST: UpgradeData$BlockFixers;
    static CHEST: UpgradeData$BlockFixers;
    static DEFAULT: UpgradeData$BlockFixers;
    static DIRECTIONS: Direction[];
    static LEAVES: UpgradeData$BlockFixers;
    static STEM_BLOCK: UpgradeData$BlockFixers;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): UpgradeData$BlockFixers;
    static values(): UpgradeData$BlockFixers[];
    private constructor(...blocks: Block[])
    private constructor(chunky: boolean, ...blocks: Block[])
    processChunk(level: LevelAccessor): void;
    updateShape(state: BlockState, direction: Direction, neighbour: BlockState, level: LevelAccessor, pos: BlockPos, neighbourPos: BlockPos): BlockState;
    name(): "BLACKLIST" | "DEFAULT" | "CHEST" | "LEAVES" | "STEM_BLOCK";
}