import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TrimPattern } from '../../../../../../net/minecraft/world/item/equipment/trim/TrimPattern.d.ts'
export class TrimPatterns extends Object {
    static BOLT: ResourceKey<TrimPattern>;
    static COAST: ResourceKey<TrimPattern>;
    static DUNE: ResourceKey<TrimPattern>;
    static EYE: ResourceKey<TrimPattern>;
    static FLOW: ResourceKey<TrimPattern>;
    static HOST: ResourceKey<TrimPattern>;
    static RAISER: ResourceKey<TrimPattern>;
    static RIB: ResourceKey<TrimPattern>;
    static SENTRY: ResourceKey<TrimPattern>;
    static SHAPER: ResourceKey<TrimPattern>;
    static SILENCE: ResourceKey<TrimPattern>;
    static SNOUT: ResourceKey<TrimPattern>;
    static SPIRE: ResourceKey<TrimPattern>;
    static TIDE: ResourceKey<TrimPattern>;
    static VEX: ResourceKey<TrimPattern>;
    static WARD: ResourceKey<TrimPattern>;
    static WAYFINDER: ResourceKey<TrimPattern>;
    static WILD: ResourceKey<TrimPattern>;
    static bootstrap(paramcontext: BootstrapContext<TrimPattern>): void;
    static defaultAssetId(paramregistryKey: ResourceKey<TrimPattern>): Identifier;
    static register(paramcontext: BootstrapContext<TrimPattern>, paramregistryKey: ResourceKey<TrimPattern>): void;
    constructor()
}