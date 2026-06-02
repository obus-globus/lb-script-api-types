import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { WolfVariant } from '../../../../../../net/minecraft/world/entity/animal/wolf/WolfVariant.d.ts'
export class WolfVariants extends Object {
    static ASHEN: ResourceKey<WolfVariant>;
    static BLACK: ResourceKey<WolfVariant>;
    static CHESTNUT: ResourceKey<WolfVariant>;
    static DEFAULT: ResourceKey<WolfVariant>;
    static PALE: ResourceKey<WolfVariant>;
    static RUSTY: ResourceKey<WolfVariant>;
    static SNOWY: ResourceKey<WolfVariant>;
    static SPOTTED: ResourceKey<WolfVariant>;
    static STRIPED: ResourceKey<WolfVariant>;
    static WOODS: ResourceKey<WolfVariant>;
    static bootstrap(paramcontext: BootstrapContext<WolfVariant>): void;
    constructor()
}