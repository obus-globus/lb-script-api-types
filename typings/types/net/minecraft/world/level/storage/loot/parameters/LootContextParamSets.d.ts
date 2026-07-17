import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ContextKeySet } from '../../../../../../../net/minecraft/util/context/ContextKeySet.d.ts'
export class LootContextParamSets extends Object {
    static ADVANCEMENT_ENTITY: ContextKeySet;
    static ADVANCEMENT_LOCATION: ContextKeySet;
    static ADVANCEMENT_REWARD: ContextKeySet;
    static ALL_PARAMS: ContextKeySet;
    static ARCHAEOLOGY: ContextKeySet;
    static BLOCK: ContextKeySet;
    static BLOCK_INTERACT: ContextKeySet;
    static BLOCK_USE: ContextKeySet;
    static CHEST: ContextKeySet;
    static CODEC: Codec<ContextKeySet>;
    static COMMAND: ContextKeySet;
    static EMPTY: ContextKeySet;
    static ENCHANTED_DAMAGE: ContextKeySet;
    static ENCHANTED_ENTITY: ContextKeySet;
    static ENCHANTED_ITEM: ContextKeySet;
    static ENCHANTED_LOCATION: ContextKeySet;
    static ENTITY: ContextKeySet;
    static ENTITY_INTERACT: ContextKeySet;
    static EQUIPMENT: ContextKeySet;
    static FISHING: ContextKeySet;
    static GIFT: ContextKeySet;
    static HIT_BLOCK: ContextKeySet;
    static PIGLIN_BARTER: ContextKeySet;
    static REGISTRY: JavaMap<Identifier, ContextKeySet>;
    static SELECTOR: ContextKeySet;
    static SHEARING: ContextKeySet;
    static VAULT: ContextKeySet;
    static VILLAGER_TRADE: ContextKeySet;
    constructor()
}