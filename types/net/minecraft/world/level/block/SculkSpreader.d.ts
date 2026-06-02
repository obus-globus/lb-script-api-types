import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { GameEventListenerWithCallback } from '../../../../../net/caffeinemc/mods/lithium/common/block/entity/sleeping_sculk/GameEventListenerWithCallback.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { LevelAccessor } from '../../../../../net/minecraft/world/level/LevelAccessor.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { SculkSpreader$ChargeCursor } from '../../../../../net/minecraft/world/level/block/SculkSpreader$ChargeCursor.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class SculkSpreader extends Object implements GameEventListenerWithCallback {
    static MAX_CHARGE: number;
    static MAX_CURSOR_DISTANCE: number;
    static MAX_DECAY_FACTOR: number;
    static MAX_GROWTH_RATE_RADIUS: number;
    static SHRIEKER_PLACEMENT_RATE: number;
    static createLevelSpreader(): SculkSpreader;
    static createWorldGenSpreader(): SculkSpreader;
    constructor(isWorldGeneration: boolean, replaceableBlocks: TagKey<Block>, growthSpawnCost: number, noGrowthRadius: number, chargeDecayRate: number, additionalDecayRate: number)
    // private additionalDecayRate: number;
    // private chargeDecayRate: number;
    readonly cursors: SculkSpreader$ChargeCursor[];
    // private growthSpawnCost: number;
    // private isWorldGeneration: boolean;
    // private listener: () => void;
    // private noGrowthRadius: number;
    // private replaceableBlocks: TagKey<Block>;
    // private addCursor(cursor: SculkSpreader$ChargeCursor): void;
    addCursors(startPos: BlockPos, charge: number): void;
    additionalDecayRate(): number;
    chargeDecayRate(): number;
    clear(): void;
    getCursors(): SculkSpreader$ChargeCursor[];
    growthSpawnCost(): number;
    isWorldGeneration(): boolean;
    lithium$setGameEventCallback(arg0: () => void): void;
    load(input: ValueInput): void;
    noGrowthRadius(): number;
    replaceableBlocks(): TagKey<Block>;
    save(output: ValueOutput): void;
    updateCursors(level: LevelAccessor, originPos: BlockPos, random: RandomSource, spreadVeins: boolean): void;
}