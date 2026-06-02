import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
export interface SpawnParticlesEffect$PositionSourceType$CoordinateSource extends Object{
    getCoordinate(pos: number, center: number, boundingBoxSpan: number, random: RandomSource): number;
}