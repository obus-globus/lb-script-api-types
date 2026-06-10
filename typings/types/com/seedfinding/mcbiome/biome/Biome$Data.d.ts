import type { Biome } from '../../../../com/seedfinding/mcbiome/biome/Biome.d.ts'
import type { OverworldBiomeSource } from '../../../../com/seedfinding/mcbiome/source/OverworldBiomeSource.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Biome$Data extends Object {
    constructor(arg0: Biome, arg1: number, arg2: number)
    constructor(arg0: (param0: Biome) => boolean, arg1: Biome, arg2: number, arg3: number)
    constructor(arg0: (param0: Biome) => boolean, arg1: number, arg2: number)
    biome: Biome;
    predicate: (param0: Biome) => boolean;
    x: number;
    z: number;
    test(arg0: OverworldBiomeSource): boolean;
}