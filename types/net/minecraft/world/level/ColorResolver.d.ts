import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
export interface ColorResolver extends Object{
    getColor(biome: Biome, x: number, z: number): number;
}