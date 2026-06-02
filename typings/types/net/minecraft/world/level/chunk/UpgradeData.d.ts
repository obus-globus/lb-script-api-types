import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Direction8 } from '../../../../../net/minecraft/core/Direction8.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { LevelHeightAccessor } from '../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { LevelChunk } from '../../../../../net/minecraft/world/level/chunk/LevelChunk.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { SavedTick } from '../../../../../net/minecraft/world/ticks/SavedTick.d.ts'
export class UpgradeData extends Object {
    static EMPTY: UpgradeData;
    constructor(tag: CompoundTag, levelHeightAccessor: LevelHeightAccessor)
    private constructor(levelHeightAccessor: LevelHeightAccessor)
    private constructor(source: UpgradeData)
    // private index: number[][];
    // private neighborBlockTicks: SavedTick<Block>[];
    // private neighborFluidTicks: SavedTick<Fluid>[];
    // private sides: Direction8[];
    copy(): UpgradeData;
    isEmpty(): boolean;
    upgrade(chunk: LevelChunk): void;
    // private upgradeInside(chunk: LevelChunk): void;
    write(): CompoundTag;
}