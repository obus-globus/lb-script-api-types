import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { OptionalInt } from '../../../../../java/util/OptionalInt.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { MobEffect } from '../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { MobEffectInstance } from '../../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$TooltipContext } from '../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { TooltipFlag } from '../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { Potion } from '../../../../../net/minecraft/world/item/alchemy/Potion.d.ts'
import type { Consumable } from '../../../../../net/minecraft/world/item/component/Consumable.d.ts'
import type { ConsumableListener } from '../../../../../net/minecraft/world/item/component/ConsumableListener.d.ts'
import type { TooltipProvider } from '../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class PotionContents extends Record implements ConsumableListener, TooltipProvider {
    static BASE_POTION_COLOR: number;
    static CODEC: Codec<PotionContents>;
    static EMPTY: PotionContents;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, PotionContents>;
    static addPotionTooltip(parameffects: MobEffectInstance[], paramlines: (param0: Component) => void, paramdurationScale: number, paramtickrate: number): void;
    static createItemStack(paramitem: Item, parampotion: Holder<Potion>): ItemStack;
    static getColorOptional(parameffects: MobEffectInstance[]): OptionalInt;
    static getPotionDescription(parammobEffect: Holder<MobEffect>, paramamplifier: number): MutableComponent;
    constructor(potion: Optional<Holder<Potion>>, customColor: Optional<number>, customEffects: MobEffectInstance[], customName: Optional<string>)
    constructor(potion: Holder<Potion>)
    // private customColor: Optional<number>;
    // private customEffects: MobEffectInstance[];
    // private customName: Optional<string>;
    // private potion: Optional<Holder<Potion>>;
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    applyToLivingEntity(entity: LivingEntity, durationScale: number): void;
    customColor(): Optional<number>;
    customEffects(): MobEffectInstance[];
    customName(): Optional<string>;
    equals(o: Object | null): boolean;
    forEachEffect(consumer: (param0: MobEffectInstance) => void, durationScale: number): void;
    getAllEffects(): MobEffectInstance[];
    getColor(): number;
    getColorOr(defaultColor: number): number;
    getName(prefix: string): Component;
    hasEffects(): boolean;
    hashCode(): number;
    is(potion: Holder<Potion>): boolean;
    onConsume(level: Level, user: LivingEntity, stack: ItemStack, consumable: Consumable): void;
    potion(): Optional<Holder<Potion>>;
    toString(): string;
    withEffectAdded(effect: MobEffectInstance): PotionContents;
    withPotion(potion: Holder<Potion>): PotionContents;
}