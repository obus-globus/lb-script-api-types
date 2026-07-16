import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ConfiguredFeature } from '../../../../../net/minecraft/world/level/levelgen/feature/ConfiguredFeature.d.ts'
import type { Feature } from '../../../../../net/minecraft/world/level/levelgen/feature/Feature.d.ts'
import type { FeatureConfiguration } from '../../../../../net/minecraft/world/level/levelgen/feature/configurations/FeatureConfiguration.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
export class FeatureUtils extends Object {
    static bootstrap(paramcontext: BootstrapContext<ConfiguredFeature<any, any>>): void;
    static createKey(paramname: string): ResourceKey<ConfiguredFeature<any, any>>;
    static register<FC extends FeatureConfiguration, F extends Feature<FC>>(paramcontext: BootstrapContext<ConfiguredFeature<any, any>>, paramid: ResourceKey<ConfiguredFeature<any, any>>, paramfeature: F, paramconfig: FC): void;
    static register(paramcontext: BootstrapContext<ConfiguredFeature<any, any>>, paramid: ResourceKey<ConfiguredFeature<any, any>>, paramfeature: Feature<NoneFeatureConfiguration>): void;
    constructor()
}