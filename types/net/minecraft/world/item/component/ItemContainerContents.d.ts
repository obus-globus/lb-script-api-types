import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemContainerContentsAccessor } from '../../../../../net/fabricmc/fabric/mixin/transfer/ItemContainerContentsAccessor.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Item$TooltipContext } from '../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { TooltipFlag } from '../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { ItemContainerContents$Slot } from '../../../../../net/minecraft/world/item/component/ItemContainerContents$Slot.d.ts'
import type { TooltipProvider } from '../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
export class ItemContainerContents extends Object implements ItemContainerContentsAccessor, TooltipProvider {
    static CODEC: Codec<ItemContainerContents>;
    static EMPTY: ItemContainerContents;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ItemContainerContents>;
    static fromItems(paramitemStacks: ItemStack[]): ItemContainerContents;
    private constructor(items: Optional<ItemStackTemplate>[])
    // private hashCode: number;
    // private items: Optional<ItemStackTemplate>[];
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    allItemsCopyStream(): Stream<ItemStack>;
    // private asSlots(): ItemContainerContents$Slot[];
    copyInto(destination: ItemStack[]): void;
    copyOne(): ItemStack;
    // private createStackFromSlot(slot: number): ItemStack;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    nonEmptyItemCopyStream(): Stream<ItemStack>;
    nonEmptyItems(): ItemStackTemplate[];
    // private nonEmptyItemsStream(): Stream<ItemStackTemplate>;
}