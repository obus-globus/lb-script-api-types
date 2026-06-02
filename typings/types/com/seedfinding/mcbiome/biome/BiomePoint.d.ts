import type { Biome } from '../../../../com/seedfinding/mcbiome/biome/Biome.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BiomePoint extends Object {
    constructor(arg0: Biome, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    altitude: number;
    readonly biome: Biome;
    humidity: number;
    temperature: number;
    weight: number;
    weirdness: number;
    distanceTo(arg0: BiomePoint): number;
    equals(arg0: Object | null): boolean;
    getBiome(): Biome;
    hashCode(): number;
    toString(): string;
}