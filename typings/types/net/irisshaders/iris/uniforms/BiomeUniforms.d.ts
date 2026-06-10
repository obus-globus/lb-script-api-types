import type { Object } from '../../../../java/lang/Object.d.ts'
import type { UniformHolder } from '../../../../net/irisshaders/iris/gl/uniform/UniformHolder.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class BiomeUniforms extends Object {
    static addBiomeUniforms(paramarg0: UniformHolder): void;
    static getBiomeMap(): Object2IntMap<ResourceKey<Biome>>;
    constructor()
}