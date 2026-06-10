import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { VillagerTrade } from '../../../../../net/minecraft/world/item/trading/VillagerTrade.d.ts'
import type { LootContext } from '../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { NumberProvider } from '../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class TradeSet extends Object {
    static CODEC: Codec<TradeSet>;
    constructor(trades: Holder<VillagerTrade>[], amount: NumberProvider, allowDuplicates: boolean, randomSequence: Optional<Identifier>)
    // private allowDuplicates: boolean;
    // private amount: NumberProvider;
    // private randomSequence: Optional<Identifier>;
    readonly trades: Holder<VillagerTrade>[];
    allowDuplicates(): boolean;
    calculateNumberOfTrades(lootContext: LootContext): number;
    getTrades(): Holder<VillagerTrade>[];
    randomSequence(): Optional<Identifier>;
}