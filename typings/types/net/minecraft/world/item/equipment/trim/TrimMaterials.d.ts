import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TrimMaterial } from '../../../../../../net/minecraft/world/item/equipment/trim/TrimMaterial.d.ts'
export class TrimMaterials extends Object {
    static AMETHYST: ResourceKey<TrimMaterial>;
    static COPPER: ResourceKey<TrimMaterial>;
    static DIAMOND: ResourceKey<TrimMaterial>;
    static EMERALD: ResourceKey<TrimMaterial>;
    static GOLD: ResourceKey<TrimMaterial>;
    static IRON: ResourceKey<TrimMaterial>;
    static LAPIS: ResourceKey<TrimMaterial>;
    static NETHERITE: ResourceKey<TrimMaterial>;
    static QUARTZ: ResourceKey<TrimMaterial>;
    static REDSTONE: ResourceKey<TrimMaterial>;
    static RESIN: ResourceKey<TrimMaterial>;
    static bootstrap(paramcontext: BootstrapContext<TrimMaterial>): void;
    constructor()
}