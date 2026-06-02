import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BiomeDefinitions$BiomeDefinition } from '../../../../../../net/raphimc/viabedrock/api/resourcepack/definition/BiomeDefinitions$BiomeDefinition.d.ts'
import type { ResourcePackStorage } from '../../../../../../net/raphimc/viabedrock/protocol/storage/ResourcePackStorage.d.ts'
export class BiomeDefinitions extends Object {
    constructor(arg0: ResourcePackStorage)
    // private biomes: { [key: string]: BiomeDefinitions$BiomeDefinition };
    biomes(): { [key: string]: BiomeDefinitions$BiomeDefinition };
    get(arg0: string): BiomeDefinitions$BiomeDefinition;
}