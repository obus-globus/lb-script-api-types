import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../../com/mojang/serialization/DataResult.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BundleContentsAccessor } from '../../../../../net/fabricmc/fabric/mixin/transfer/BundleContentsAccessor.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { TooltipComponent } from '../../../../../net/minecraft/world/inventory/tooltip/TooltipComponent.d.ts'
import type { ItemInstance } from '../../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemStackTemplate } from '../../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { Fraction } from '../../../../../org/apache/commons/lang3/math/Fraction.d.ts'
export class BundleContents extends Object implements BundleContentsAccessor, TooltipComponent {
    static BEEHIVE_WEIGHT: DataResult<Fraction>;
    static CODEC: Codec<BundleContents>;
    static EMPTY: BundleContents;
    static NO_SELECTED_ITEM_INDEX: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, BundleContents>;
    static canItemBeInBundle(paramitemToAdd: ItemStack): boolean;
    static getWeight(paramarg0: ItemInstance): DataResult<Fraction>;
    constructor(items: ItemStackTemplate[])
    private constructor(items: ItemStackTemplate[], selectedItem: number)
    // private items: ItemStackTemplate[];
    readonly selectedItem: number;
    // private weight: () => DataResult<Fraction>;
    equals(obj: Object | null): boolean;
    getNumberOfItemsToShow(): number;
    getSelectedItem(): ItemStackTemplate;
    getSelectedItemIndex(): number;
    hashCode(): number;
    isEmpty(): boolean;
    itemCopyStream(): Stream<ItemStack>;
    items(): ItemStackTemplate[];
    size(): number;
    toString(): string;
    weight(): DataResult<Fraction>;
}