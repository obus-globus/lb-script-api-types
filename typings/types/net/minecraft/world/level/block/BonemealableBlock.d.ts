import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
import type { LevelReader } from '../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BonemealableBlock$Type } from '../../../../../net/minecraft/world/level/block/BonemealableBlock$Type.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BonemealableBlock extends Object{
    getParticlePos(blockPos: BlockPos): BlockPos;
    getType(): BonemealableBlock$Type;
    isBonemealSuccess(level: Level, random: RandomSource, pos: BlockPos, state: BlockState): boolean;
    isValidBonemealTarget(level: LevelReader, pos: BlockPos, state: BlockState): boolean;
    performBonemeal(level: ServerLevel, random: RandomSource, pos: BlockPos, state: BlockState): void;
}