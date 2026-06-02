import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Climate$Parameter } from '../../../../../net/minecraft/world/level/biome/Climate$Parameter.d.ts'
import type { Climate$ParameterPoint } from '../../../../../net/minecraft/world/level/biome/Climate$ParameterPoint.d.ts'
import type { Climate$Sampler } from '../../../../../net/minecraft/world/level/biome/Climate$Sampler.d.ts'
import type { Climate$TargetPoint } from '../../../../../net/minecraft/world/level/biome/Climate$TargetPoint.d.ts'
export class Climate extends Object {
    static empty(): Climate$Sampler;
    static findSpawnPosition(paramtargetClimates: Climate$ParameterPoint[], paramsampler: Climate$Sampler): BlockPos;
    static parameters(paramtemperature: number, paramhumidity: number, paramcontinentalness: number, paramerosion: number, paramdepth: number, paramweirdness: number, paramoffset: number): Climate$ParameterPoint;
    static parameters(paramtemperature: Climate$Parameter, paramhumidity: Climate$Parameter, paramcontinentalness: Climate$Parameter, paramerosion: Climate$Parameter, paramdepth: Climate$Parameter, paramweirdness: Climate$Parameter, paramoffset: number): Climate$ParameterPoint;
    static quantizeCoord(paramcoord: number): number;
    static target(paramtemperature: number, paramhumidity: number, paramcontinentalness: number, paramerosion: number, paramdepth: number, paramweirdness: number): Climate$TargetPoint;
    static unquantizeCoord(paramcoord: number): number;
    constructor()
}