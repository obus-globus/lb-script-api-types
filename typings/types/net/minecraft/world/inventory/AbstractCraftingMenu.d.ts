import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { StackedItemContents } from '../../../../net/minecraft/world/entity/player/StackedItemContents.d.ts'
import type { MenuType } from '../../../../net/minecraft/world/inventory/MenuType.d.ts'
import type { RecipeBookMenu } from '../../../../net/minecraft/world/inventory/RecipeBookMenu.d.ts'
import type { RecipeBookMenu$PostPlaceAction } from '../../../../net/minecraft/world/inventory/RecipeBookMenu$PostPlaceAction.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { CraftingRecipe } from '../../../../net/minecraft/world/item/crafting/CraftingRecipe.d.ts'
import type { RecipeHolder } from '../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export abstract class AbstractCraftingMenu extends RecipeBookMenu {
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
    constructor(menuType: MenuType<any>, containerId: number, width: number, height: number)
    // private craftSlots: (Object | null)[];
    // private height: number;
    // private resultSlots: (Object | null)[];
    // private width: number;
    addCraftingGridSlots(left: number, top: number): void;
    addResultSlot(player: Player, x: number, y: number): Slot;
    beginPlacingRecipe(): void;
    fillCraftSlotsStackedContents(stackedContents: StackedItemContents): void;
    finishPlacingRecipe(level: ServerLevel, recipe: RecipeHolder<CraftingRecipe>): void;
    getGridHeight(): number;
    getGridWidth(): number;
    getInputGridSlots(): Slot[];
    getResultSlot(): Slot;
    handlePlacement(useMaxItems: boolean, allowDroppingItemsToClear: boolean, recipe: RecipeHolder<any>, level: ServerLevel, inventory: (Object | null)[]): RecipeBookMenu$PostPlaceAction;
    owner(): Player;
}