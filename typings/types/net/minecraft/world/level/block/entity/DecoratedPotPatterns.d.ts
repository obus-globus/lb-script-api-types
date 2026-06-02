import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { DecoratedPotPattern } from '../../../../../../net/minecraft/world/level/block/entity/DecoratedPotPattern.d.ts'
export class DecoratedPotPatterns extends Object {
    static ANGLER: ResourceKey<DecoratedPotPattern>;
    static ARCHER: ResourceKey<DecoratedPotPattern>;
    static ARMS_UP: ResourceKey<DecoratedPotPattern>;
    static BLADE: ResourceKey<DecoratedPotPattern>;
    static BLANK: ResourceKey<DecoratedPotPattern>;
    static BREWER: ResourceKey<DecoratedPotPattern>;
    static BURN: ResourceKey<DecoratedPotPattern>;
    static DANGER: ResourceKey<DecoratedPotPattern>;
    static EXPLORER: ResourceKey<DecoratedPotPattern>;
    static FLOW: ResourceKey<DecoratedPotPattern>;
    static FRIEND: ResourceKey<DecoratedPotPattern>;
    static GUSTER: ResourceKey<DecoratedPotPattern>;
    static HEART: ResourceKey<DecoratedPotPattern>;
    static HEARTBREAK: ResourceKey<DecoratedPotPattern>;
    static HOWL: ResourceKey<DecoratedPotPattern>;
    static MINER: ResourceKey<DecoratedPotPattern>;
    static MOURNER: ResourceKey<DecoratedPotPattern>;
    static PLENTY: ResourceKey<DecoratedPotPattern>;
    static PRIZE: ResourceKey<DecoratedPotPattern>;
    static SCRAPE: ResourceKey<DecoratedPotPattern>;
    static SHEAF: ResourceKey<DecoratedPotPattern>;
    static SHELTER: ResourceKey<DecoratedPotPattern>;
    static SKULL: ResourceKey<DecoratedPotPattern>;
    static SNORT: ResourceKey<DecoratedPotPattern>;
    static bootstrap(paramregistry: DecoratedPotPattern[]): DecoratedPotPattern;
    static getPatternFromItem(paramitem: Item): ResourceKey<DecoratedPotPattern>;
    constructor()
}