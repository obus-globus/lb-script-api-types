import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentGetter } from '../../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Item$TooltipContext } from '../../../../../../net/minecraft/world/item/Item$TooltipContext.d.ts'
import type { TooltipFlag } from '../../../../../../net/minecraft/world/item/TooltipFlag.d.ts'
import type { TooltipProvider } from '../../../../../../net/minecraft/world/item/component/TooltipProvider.d.ts'
import type { EquipmentAsset } from '../../../../../../net/minecraft/world/item/equipment/EquipmentAsset.d.ts'
import type { TrimMaterial } from '../../../../../../net/minecraft/world/item/equipment/trim/TrimMaterial.d.ts'
import type { TrimPattern } from '../../../../../../net/minecraft/world/item/equipment/trim/TrimPattern.d.ts'
export class ArmorTrim extends Record implements TooltipProvider {
    static CODEC: Codec<ArmorTrim>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ArmorTrim>;
    constructor(material: Holder<TrimMaterial>, pattern: Holder<TrimPattern>)
    // private material: Holder<TrimMaterial>;
    // private pattern: Holder<TrimPattern>;
    addToTooltip(context: Item$TooltipContext, consumer: (param0: Component) => void, flag: TooltipFlag, components: DataComponentGetter): void;
    equals(o: Object | null): boolean;
    hashCode(): number;
    layerAssetId(layerAssetPrefix: string, equipmentAsset: ResourceKey<EquipmentAsset>): Identifier;
    material(): Holder<TrimMaterial>;
    pattern(): Holder<TrimPattern>;
    toString(): string;
}