import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MultiPlayerGameMode } from '../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { AbstractContainerMenu } from '../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemCost } from '../../../../net/minecraft/world/item/trading/ItemCost.d.ts'
import type { Merchant } from '../../../../net/minecraft/world/item/trading/Merchant.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export class MerchantMenu extends AbstractContainerMenu {
    static CARRIED_SLOT_SIZE: number;
    static QUICKCRAFT_HEADER_CONTINUE: number;
    static QUICKCRAFT_HEADER_END: number;
    static QUICKCRAFT_HEADER_START: number;
    static QUICKCRAFT_TYPE_CHARITABLE: number;
    static QUICKCRAFT_TYPE_CLONE: number;
    static QUICKCRAFT_TYPE_GREEDY: number;
    static SLOTS_PER_ROW: number;
    static SLOT_CLICKED_OUTSIDE: number;
    static SLOT_SIZE: number;
    static canItemQuickReplace(paramslot: Slot, paramitemStack: ItemStack, paramignoreSize: boolean): boolean;
    static getQuickCraftPlaceCount(paramquickCraftSlotsSize: number, paramquickCraftingType: number, paramitemStack: ItemStack): number;
    static getQuickcraftHeader(parammask: number): number;
    static getQuickcraftMask(paramheader: number, paramtype: number): number;
    static getQuickcraftType(parammask: number): number;
    static getRedstoneSignalFromBlockEntity(paramblockEntity: BlockEntity): number;
    static getRedstoneSignalFromContainer(paramcontainer: ItemStack[]): number;
    static isValidQuickcraftType(paramtype: number, paramplayer: Player): boolean;
    constructor(containerId: number, inventory: (Object | null)[])
    constructor(containerId: number, inventory: (Object | null)[], merchant: Merchant)
    readonly merchantLevel: number;
    // private tradeContainer: (Object | null)[];
    // private trader: Merchant;
    canRestock(): boolean;
    canTakeItemForPickAll(carried: ItemStack, target: Slot): boolean;
    getFutureTraderXp(): number;
    getOffers(): (Object | null)[];
    getTraderLevel(): number;
    getTraderXp(): number;
    // private moveFromInventoryToPaymentSlot(paymentSlot: number, cost: ItemCost): void;
    // private playTradeSound(): void;
    quickMoveStack(player: Player, slotIndex: number): ItemStack;
    removed(player: Player): void;
    setCanRestock(canRestock: boolean): void;
    setMerchantLevel(level: number): void;
    setOffers(offers: (Object | null)[]): void;
    setSelectionHint(hint: number): void;
    setShowProgressBar(show: boolean): void;
    setXp(xp: number): void;
    showProgressBar(): boolean;
    slotsChanged(container: ItemStack[]): void;
    stillValid(player: Player): boolean;
    tryMoveItems(newTradeIndex: number): void;
    // private viaFabricPlus$autofill(arg0: MultiPlayerGameMode, arg1: LocalPlayer, arg2: number, arg3: ItemCost): void;
}