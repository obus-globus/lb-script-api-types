import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { StackedItemContents } from '../../../../net/minecraft/world/entity/player/StackedItemContents.d.ts'
import type { AbstractContainerMenu } from '../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { MenuType } from '../../../../net/minecraft/world/inventory/MenuType.d.ts'
import type { RecipeBookMenu$PostPlaceAction } from '../../../../net/minecraft/world/inventory/RecipeBookMenu$PostPlaceAction.d.ts'
import type { RecipeBookType } from '../../../../net/minecraft/world/inventory/RecipeBookType.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { RecipeHolder } from '../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export abstract class RecipeBookMenu extends AbstractContainerMenu {
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
    constructor(menuType: MenuType<Object>, containerId: number)
    fillCraftSlotsStackedContents(stackedContents: StackedItemContents): void;
    getRecipeBookType(): RecipeBookType;
    handlePlacement(useMaxItems: boolean, allowDroppingItemsToClear: boolean, recipe: RecipeHolder<Object>, level: ServerLevel, inventory: (Object | null)[]): RecipeBookMenu$PostPlaceAction;
}