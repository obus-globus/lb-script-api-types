import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export class AmbientDesertBlockSoundsPlayer extends Object {
    static playAmbientDeadBushSounds(paramlevel: Level, parampos: BlockPos, paramrandom: RandomSource): void;
    static playAmbientDryGrassSounds(paramlevel: Level, parampos: BlockPos, paramrandom: RandomSource): void;
    static playAmbientSandSounds(paramlevel: Level, parampos: BlockPos, paramrandom: RandomSource): void;
    static shouldPlayDesertDryVegetationBlockSounds(paramlevel: Level, parambelowPos: BlockPos): boolean;
    constructor()
}