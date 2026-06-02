import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Item$TooltipContext } from '../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { TooltipFlag } from '../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { Consumable } from '../../../../../net/minecraft/world/item/component/Consumable.d.ts'
import type { ConsumableListener } from '../../../../../net/minecraft/world/item/component/ConsumableListener.d.ts'
import type { SuspiciousStewEffects$Entry } from '../../../../../net/minecraft/world/item/component/SuspiciousStewEffects$Entry.d.ts'
import type { TooltipProvider } from '../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class SuspiciousStewEffects extends Record implements ConsumableListener, TooltipProvider {
    static CODEC: Codec<SuspiciousStewEffects>;
    static DEFAULT_DURATION: number;
    static EMPTY: SuspiciousStewEffects;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, SuspiciousStewEffects>;
    constructor(effects: SuspiciousStewEffects$Entry[])
    // private effects: SuspiciousStewEffects$Entry[];
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    effects(): SuspiciousStewEffects$Entry[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    onConsume(level: Level, user: LivingEntity, stack: ItemStack, consumable: Consumable): void;
    toString(): string;
    withEffectAdded(entry: SuspiciousStewEffects$Entry): SuspiciousStewEffects;
}