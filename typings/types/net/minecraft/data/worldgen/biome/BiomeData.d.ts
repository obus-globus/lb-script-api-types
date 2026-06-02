import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export abstract class BiomeData extends Object {
    static bootstrap(paramcontext: BootstrapContext<Biome>): void;
    constructor()
}