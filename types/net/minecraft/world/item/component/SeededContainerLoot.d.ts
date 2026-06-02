import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Item$TooltipContext } from '../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { TooltipFlag } from '../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { TooltipProvider } from '../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
import type { LootTable } from '../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class SeededContainerLoot extends Record implements TooltipProvider {
    static CODEC: Codec<SeededContainerLoot>;
    // private lootTable: ResourceKey<LootTable>;
    // private seed: number;
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    lootTable(): ResourceKey<LootTable>;
    seed(): number;
    toString(): string;
}