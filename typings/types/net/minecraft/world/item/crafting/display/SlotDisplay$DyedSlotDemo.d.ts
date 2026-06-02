import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ContextMap } from '../../../../../../net/minecraft/util/context/ContextMap.d.ts'
import type { FeatureFlagSet } from '../../../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { DisplayContentsFactory } from '../../../../../../net/minecraft/world/item/crafting/display/DisplayContentsFactory.d.ts'
import type { SlotDisplay } from '../../../../../../net/minecraft/world/item/crafting/display/SlotDisplay.d.ts'
import type { SlotDisplay$Type } from '../../../../../../net/minecraft/world/item/crafting/display/SlotDisplay$Type.d.ts'
export class SlotDisplay$DyedSlotDemo extends Record implements SlotDisplay {
    static CODEC: Codec<SlotDisplay>;
    static MAP_CODEC: MapCodec<SlotDisplay$DyedSlotDemo>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, SlotDisplay$DyedSlotDemo>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, SlotDisplay>;
    static TYPE: SlotDisplay$Type<SlotDisplay$DyedSlotDemo>;
    constructor(dye: SlotDisplay, target: SlotDisplay)
    // private dye: SlotDisplay;
    // private target: SlotDisplay;
    dye(): SlotDisplay;
    equals(o: Object | null): boolean;
    hashCode(): number;
    isEnabled(enabledFeatures: FeatureFlagSet): boolean;
    resolve(context: ContextMap, factory: DisplayContentsFactory<T>): Stream<T>;
    resolveForFirstStack(context: ContextMap): ItemStack;
    resolveForStacks(context: ContextMap): ItemStack[];
    target(): SlotDisplay;
    toString(): string;
    type(): SlotDisplay$Type<SlotDisplay$DyedSlotDemo>;
}