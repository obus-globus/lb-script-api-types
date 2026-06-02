import type { Biome } from '../../../../../com/seedfinding/mcbiome/biome/Biome.d.ts'
import type { MultiNoiseLayer18$TargetPoint } from '../../../../../com/seedfinding/mcbiome/layer/noise/MultiNoiseLayer18$TargetPoint.d.ts'
import type { Pair } from '../../../../../com/seedfinding/mccore/util/data/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MultiNoiseLayer18$BiomePoint extends Object {
    static distance(paramarg0: Pair<number, number>, paramarg1: number): number;
    static square(paramarg0: number): number;
    constructor(arg0: Biome, arg1: Pair<number, number>, arg2: Pair<number, number>, arg3: Pair<number, number>, arg4: Pair<number, number>, arg5: Pair<number, number>, arg6: Pair<number, number>, arg7: number)
    altitude: Pair<number, number>;
    readonly biome: Biome;
    depth: Pair<number, number>;
    erosion: Pair<number, number>;
    humidity: Pair<number, number>;
    offset: number;
    temperature: Pair<number, number>;
    weirdness: Pair<number, number>;
    fitness(arg0: MultiNoiseLayer18$TargetPoint): number;
    getBiome(): Biome;
}