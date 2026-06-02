import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Feature } from '../../../../../net/minecraft/world/level/levelgen/feature/Feature.d.ts'
import type { NoneFeatureConfiguration } from '../../../../../net/minecraft/world/level/levelgen/feature/configurations/NoneFeatureConfiguration.d.ts'
export class FeatureUtils extends Object {
    static bootstrap(paramcontext: BootstrapContext<Object>): void;
    static createKey(paramname: string): ResourceKey<Object>;
    static register(paramcontext: BootstrapContext<Object>, paramid: ResourceKey<Object>, paramfeature: Object | null, paramconfig: Object | null): void;
    static register(paramcontext: BootstrapContext<Object>, paramid: ResourceKey<Object>, paramfeature: Feature<NoneFeatureConfiguration>): void;
    constructor()
}