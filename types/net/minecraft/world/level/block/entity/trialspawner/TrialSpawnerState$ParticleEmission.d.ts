import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
export interface TrialSpawnerState$ParticleEmission extends Object{
    emit(level: Level, random: RandomSource, blockPos: BlockPos, isOminous: boolean): void;
}