import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { PoiType } from '../../../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { TradeSet } from '../../../../../../net/minecraft/world/item/trading/TradeSet.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class VillagerProfession extends Record {
    static ALL_ACQUIRABLE_JOBS: (param0: Holder<PoiType>) => boolean;
    static ARMORER: ResourceKey<VillagerProfession>;
    static BUTCHER: ResourceKey<VillagerProfession>;
    static CARTOGRAPHER: ResourceKey<VillagerProfession>;
    static CLERIC: ResourceKey<VillagerProfession>;
    static FARMER: ResourceKey<VillagerProfession>;
    static FISHERMAN: ResourceKey<VillagerProfession>;
    static FLETCHER: ResourceKey<VillagerProfession>;
    static LEATHERWORKER: ResourceKey<VillagerProfession>;
    static LIBRARIAN: ResourceKey<VillagerProfession>;
    static MASON: ResourceKey<VillagerProfession>;
    static NITWIT: ResourceKey<VillagerProfession>;
    static NONE: ResourceKey<VillagerProfession>;
    static SHEPHERD: ResourceKey<VillagerProfession>;
    static TOOLSMITH: ResourceKey<VillagerProfession>;
    static WEAPONSMITH: ResourceKey<VillagerProfession>;
    static bootstrap(paramregistry: VillagerProfession[]): VillagerProfession;
    constructor(name: Component, heldJobSite: (param0: Holder<PoiType>) => boolean, acquirableJobSite: (param0: Holder<PoiType>) => boolean, requestedItems: Item[], secondaryPoi: Block[], workSound: SoundEvent, tradeSetsByLevel: { [key: string]: any })
    // private acquirableJobSite: (param0: Holder<PoiType>) => boolean;
    // private heldJobSite: (param0: Holder<PoiType>) => boolean;
    // private name: Component;
    // private requestedItems: Item[];
    // private secondaryPoi: Block[];
    // private tradeSetsByLevel: { [key: string]: any };
    // private workSound: SoundEvent;
    acquirableJobSite(): (param0: Holder<PoiType>) => boolean;
    equals(o: Object | null): boolean;
    getTrades(level: number): ResourceKey<TradeSet>;
    hashCode(): number;
    heldJobSite(): (param0: Holder<PoiType>) => boolean;
    name(): Component;
    requestedItems(): Item[];
    secondaryPoi(): Block[];
    toString(): string;
    tradeSetsByLevel(): { [key: string]: any };
    workSound(): SoundEvent;
}