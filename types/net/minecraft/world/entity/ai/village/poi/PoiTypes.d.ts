import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { PoiType } from '../../../../../../../net/minecraft/world/entity/ai/village/poi/PoiType.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class PoiTypes extends Object {
    static ARMORER: ResourceKey<PoiType>;
    static BEEHIVE: ResourceKey<PoiType>;
    static BEE_NEST: ResourceKey<PoiType>;
    static BUTCHER: ResourceKey<PoiType>;
    static CARTOGRAPHER: ResourceKey<PoiType>;
    static CLERIC: ResourceKey<PoiType>;
    static FARMER: ResourceKey<PoiType>;
    static FISHERMAN: ResourceKey<PoiType>;
    static FLETCHER: ResourceKey<PoiType>;
    static HOME: ResourceKey<PoiType>;
    static LEATHERWORKER: ResourceKey<PoiType>;
    static LIBRARIAN: ResourceKey<PoiType>;
    static LIGHTNING_ROD: ResourceKey<PoiType>;
    static LODESTONE: ResourceKey<PoiType>;
    static MASON: ResourceKey<PoiType>;
    static MEETING: ResourceKey<PoiType>;
    static NETHER_PORTAL: ResourceKey<PoiType>;
    static SHEPHERD: ResourceKey<PoiType>;
    static TEST_INSTANCE: ResourceKey<PoiType>;
    static TOOLSMITH: ResourceKey<PoiType>;
    static WEAPONSMITH: ResourceKey<PoiType>;
    static bootstrap(paramregistry: PoiType[]): PoiType;
    static forState(paramstate: BlockState): Optional<Object>;
    static hasPoi(paramstate: BlockState): boolean;
    static register(paramregistry: PoiType[], paramid: ResourceKey<PoiType>, parammatchingStates: BlockState[], parammaxTickets: number, paramvalidRange: number): PoiType;
    constructor()
}