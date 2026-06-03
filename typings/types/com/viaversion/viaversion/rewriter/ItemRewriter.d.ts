import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { FullMappings } from '../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { HashedItem } from '../../../../com/viaversion/viaversion/api/minecraft/item/HashedItem.d.ts'
import type { Item } from '../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { ItemRewriter as ItemRewriter_2 } from '../../../../com/viaversion/viaversion/api/rewriter/ItemRewriter.d.ts'
import type { RewriterBase } from '../../../../com/viaversion/viaversion/api/rewriter/RewriterBase.d.ts'
import type { Type } from '../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class ItemRewriter<C extends ClientboundPacketType, S extends ServerboundPacketType, T extends Protocol<C, Object, Object, S>> extends RewriterBase<T> implements ItemRewriter_2<T> {
    constructor(arg0: T)
    constructor(arg0: T, arg1: Type<Item>, arg2: Type<Item[]>)
    constructor(arg0: T, arg1: Type<Item>, arg2: Type<Item[]>, arg3: Type<Item>, arg4: Type<Item[]>)
    // private itemArrayType: Type<Item[]>;
    // private itemCostType: Type<Item>;
    // private itemTemplateType: Type<Item>;
    // private itemType: Type<Item>;
    // private mappedItemArrayType: Type<Item[]>;
    // private mappedItemCostType: Type<Item>;
    // private mappedItemTemplateType: Type<Item>;
    // private mappedItemType: Type<Item>;
    // private mappedOptionalItemCostType: Type<Item>;
    // private optionalItemCostType: Type<Item>;
    handleHashedItem(arg0: UserConnection, arg1: HashedItem): HashedItem;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToClientAndTrackHash(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    handleTradeList(arg0: PacketWrapper): void;
    itemArrayType(): Type<Item[]>;
    itemArrayType(): Type<Item[]>;
    itemHasher(arg0: UserConnection): T;
    itemTemplateType(): Type<Item>;
    itemTemplateType(): Type<Item>;
    itemType(): Type<Item>;
    itemType(): Type<Item>;
    mappedItemArrayType(): Type<Item[]>;
    mappedItemArrayType(): Type<Item[]>;
    mappedItemTemplateType(): Type<Item>;
    mappedItemTemplateType(): Type<Item>;
    mappedItemType(): Type<Item>;
    mappedItemType(): Type<Item>;
    nbtTagName(): string;
    nbtTagName(arg0: string): string;
    passthroughClientboundItem(arg0: PacketWrapper): void;
    passthroughClientboundItemAndTrackHash(arg0: PacketWrapper): void;
    passthroughClientboundItemTemplate(arg0: PacketWrapper): void;
    passthroughHashedItem(arg0: PacketWrapper): void;
    registerAdvancements(arg0: C): void;
    registerAdvancements1_20_3(arg0: C): void;
    registerContainerClick(arg0: S): void;
    registerContainerClick1_17_1(arg0: S): void;
    registerContainerClick1_17_1(arg0: S, arg1: Type<Number>): void;
    registerContainerClick1_21_2(arg0: S): void;
    registerContainerClick1_21_5(arg0: S): void;
    registerContainerSetData(arg0: C): void;
    registerCooldown(arg0: C): void;
    registerCooldown1_21_2(arg0: C): void;
    registerCustomPayloadTradeList(arg0: C): void;
    registerMerchantOffers1_14_4(arg0: C): void;
    registerMerchantOffers1_19(arg0: C): void;
    registerMerchantOffers1_20_5(arg0: C): void;
    registerOpenScreen(arg0: C): void;
    registerSetContent(arg0: C): void;
    registerSetContent1_17_1(arg0: C): void;
    // private registerSetContent1_17_1(arg0: C, arg1: Type<Number>): void;
    registerSetContent1_21_2(arg0: C): void;
    registerSetCreativeModeSlot(arg0: S): void;
    registerSetCreativeModeSlot1_20_5(arg0: S): void;
    registerSetCursorItem(arg0: C): void;
    registerSetEquipment(arg0: C): void;
    registerSetEquippedItem(arg0: C): void;
    registerSetPlayerInventory(arg0: C): void;
    registerSetSlot(arg0: C): void;
    registerSetSlot1_17_1(arg0: C): void;
    // private registerSetSlot1_17_1(arg0: C, arg1: Type<Number>): void;
    registerSetSlot1_21_2(arg0: C): void;
    updateHashedItemDataComponentIds(arg0: HashedItem, arg1: FullMappings): void;
}