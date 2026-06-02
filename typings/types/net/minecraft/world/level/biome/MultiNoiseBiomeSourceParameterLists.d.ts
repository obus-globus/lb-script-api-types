import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MultiNoiseBiomeSourceParameterList } from '../../../../../net/minecraft/world/level/biome/MultiNoiseBiomeSourceParameterList.d.ts'
export class MultiNoiseBiomeSourceParameterLists extends Object {
    static NETHER: ResourceKey<MultiNoiseBiomeSourceParameterList>;
    static OVERWORLD: ResourceKey<MultiNoiseBiomeSourceParameterList>;
    static bootstrap(paramcontext: BootstrapContext<MultiNoiseBiomeSourceParameterList>): void;
    constructor()
}