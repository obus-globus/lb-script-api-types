import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ColorResolver } from '../../../../../../../net/minecraft/world/level/ColorResolver.d.ts'
import type { Biome } from '../../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class ColorResolverRegistry extends Object {
    static getAllResolvers(): (param0: Biome, param1: number, param2: number) => kotlin.Int[];
    static getCustomResolvers(): (param0: Biome, param1: number, param2: number) => kotlin.Int[];
    static isRegistered(paramarg0: (param0: Biome, param1: number, param2: number) => kotlin.Int): boolean;
    static register(paramarg0: (param0: Biome, param1: number, param2: number) => kotlin.Int): void;
    private constructor()
}