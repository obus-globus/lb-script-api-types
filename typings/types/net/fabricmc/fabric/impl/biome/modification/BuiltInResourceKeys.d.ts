import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HolderGetter } from '../../../../../../net/minecraft/core/HolderGetter.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class BuiltInResourceKeys extends Object {
    static biomeHolderGetter(): HolderGetter<Biome>;
    static isBuiltinBiome(paramarg0: ResourceKey<Biome>): boolean;
    private constructor()
}