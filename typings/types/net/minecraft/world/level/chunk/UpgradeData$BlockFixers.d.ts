import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { UpgradeData$BlockFixer } from '../../../../../net/minecraft/world/level/chunk/UpgradeData$BlockFixer.d.ts'
export class UpgradeData$BlockFixers extends Enum<UpgradeData$BlockFixers> implements UpgradeData$BlockFixer {
    static BLACKLIST: UpgradeData$BlockFixers;
    static CHEST: UpgradeData$BlockFixers;
    static DEFAULT: UpgradeData$BlockFixers;
    static DIRECTIONS: (Object | null)[];
    static LEAVES: UpgradeData$BlockFixers;
    static STEM_BLOCK: UpgradeData$BlockFixers;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): UpgradeData$BlockFixers;
    static values(): (Object | null)[];
    private constructor(blocks: Block[])
    private constructor(chunky: boolean, blocks: Block[])
    processChunk(level: LevelAccessor): void;
    name(): "BLACKLIST" | "DEFAULT" | "CHEST" | "LEAVES" | "STEM_BLOCK";
}