import type { ItemExchangeValue } from '../../../../../../com/viaversion/viaaprilfools/api/minecraft/item/ItemExchangeValue.d.ts'
import type { LodestoneTracker25w14craftmine } from '../../../../../../com/viaversion/viaaprilfools/api/minecraft/item/LodestoneTracker25w14craftmine.d.ts'
import type { MobTrophyInfo } from '../../../../../../com/viaversion/viaaprilfools/api/minecraft/item/MobTrophyInfo.d.ts'
import type { RoomerinoComponentino } from '../../../../../../com/viaversion/viaaprilfools/api/minecraft/item/RoomerinoComponentino.d.ts'
import type { WorldModifiers } from '../../../../../../com/viaversion/viaaprilfools/api/minecraft/item/WorldModifiers.d.ts'
import type { StructuredDataKey } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { StructuredDataKeys1_21_5 } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys1_21_5.d.ts'
import type { VersionedTypesHolder } from '../../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { Unit } from '../../../../../../com/viaversion/viaversion/util/Unit.d.ts'
export class StructuredDataKeys25w14craftmine extends StructuredDataKeys1_21_5 {
    static DIMENSION_ID: StructuredDataKey<string>;
    static ITEM_EXCHANGE_VALUE: StructuredDataKey<ItemExchangeValue>;
    static LODESTONE_TRACKER: StructuredDataKey<LodestoneTracker25w14craftmine>;
    static MINE_ACTIVE: StructuredDataKey<Unit>;
    static MINE_COMPLETED: StructuredDataKey<boolean>;
    static MOB_TROPHY_TYPE: StructuredDataKey<MobTrophyInfo>;
    static ROOM: StructuredDataKey<RoomerinoComponentino>;
    static SKY: StructuredDataKey<number>;
    static SPECIAL_MINE: StructuredDataKey<number>;
    static TROPHY_TYPE: StructuredDataKey<string>;
    static WORLD_EFFECT_HINT: StructuredDataKey<Unit>;
    static WORLD_EFFECT_UNLOCK: StructuredDataKey<Unit>;
    static WORLD_MODIFIERS: StructuredDataKey<WorldModifiers>;
    constructor(arg0: VersionedTypesHolder)
}