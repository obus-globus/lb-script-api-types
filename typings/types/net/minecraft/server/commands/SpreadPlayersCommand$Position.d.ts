import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
export class SpreadPlayersCommand$Position extends Object {
    private constructor()
    // private x: number;
    // private z: number;
    clamp(minX: number, minZ: number, maxX: number, maxZ: number): boolean;
    dist(target: SpreadPlayersCommand$Position): number;
    getLength(): number;
    getSpawnY(level: BlockGetter, maxHeight: number): number;
    isSafe(level: BlockGetter, maxHeight: number): boolean;
    moveAway(pos: SpreadPlayersCommand$Position): void;
    normalize(): void;
    randomize(random: RandomSource, minX: number, minZ: number, maxX: number, maxZ: number): void;
}