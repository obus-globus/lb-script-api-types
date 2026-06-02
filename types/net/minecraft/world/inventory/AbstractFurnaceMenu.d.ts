import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { StackedItemContents } from '../../../../net/minecraft/world/entity/player/StackedItemContents.d.ts'
import type { ContainerData } from '../../../../net/minecraft/world/inventory/ContainerData.d.ts'
import type { MenuType } from '../../../../net/minecraft/world/inventory/MenuType.d.ts'
import type { RecipeBookMenu } from '../../../../net/minecraft/world/inventory/RecipeBookMenu.d.ts'
import type { RecipeBookMenu$PostPlaceAction } from '../../../../net/minecraft/world/inventory/RecipeBookMenu$PostPlaceAction.d.ts'
import type { RecipeBookType } from '../../../../net/minecraft/world/inventory/RecipeBookType.d.ts'
import type { Slot } from '../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { AbstractCookingRecipe } from '../../../../net/minecraft/world/item/crafting/AbstractCookingRecipe.d.ts'
import type { RecipeHolder } from '../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { RecipePropertySet } from '../../../../net/minecraft/world/item/crafting/RecipePropertySet.d.ts'
import type { RecipeType } from '../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockEntity } from '../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
export abstract class AbstractFurnaceMenu extends RecipeBookMenu {
    static CARRIED_SLOT_SIZE: number;
    static DATA_COUNT: number;
    static FUEL_SLOT: number;
    static INGREDIENT_SLOT: number;
    static QUICKCRAFT_HEADER_CONTINUE: number;
    static QUICKCRAFT_HEADER_END: number;
    static QUICKCRAFT_HEADER_START: number;
    static QUICKCRAFT_TYPE_CHARITABLE: number;
    static QUICKCRAFT_TYPE_CLONE: number;
    static QUICKCRAFT_TYPE_GREEDY: number;
    static RESULT_SLOT: number;
    static SLOTS_PER_ROW: number;
    static SLOT_CLICKED_OUTSIDE: number;
    static SLOT_COUNT: number;
    static SLOT_SIZE: number;
    static canItemQuickReplace(paramslot: Slot, paramitemStack: ItemStack, paramignoreSize: boolean): boolean;
    static getQuickCraftPlaceCount(paramquickCraftSlotsSize: number, paramquickCraftingType: number, paramitemStack: ItemStack): number;
    static getQuickcraftHeader(parammask: number): number;
    static getQuickcraftMask(paramheader: number, paramtype: number): number;
    static getQuickcraftType(parammask: number): number;
    static getRedstoneSignalFromBlockEntity(paramblockEntity: BlockEntity): number;
    static getRedstoneSignalFromContainer(paramcontainer: ItemStack[]): number;
    static isValidQuickcraftType(paramtype: number, paramplayer: Player): boolean;
    constructor(menuType: MenuType<Object>, recipeType: RecipeType<AbstractCookingRecipe>, allowedInputs: ResourceKey<RecipePropertySet>, recipeBookType: RecipeBookType, containerId: number, inventory: (Object | null)[])
    constructor(menuType: MenuType<Object>, recipeType: RecipeType<AbstractCookingRecipe>, allowedInputs: ResourceKey<RecipePropertySet>, recipeBookType: RecipeBookType, containerId: number, inventory: (Object | null)[], container: ItemStack[], data: ContainerData)
    // private acceptedInputs: RecipePropertySet;
    // private container: ItemStack[];
    readonly data: ContainerData;
    // private level: Level;
    readonly recipeBookType: RecipeBookType;
    // private recipeType: RecipeType<AbstractCookingRecipe>;
    canSmelt(itemStack: ItemStack): boolean;
    fillCraftSlotsStackedContents(stackedContents: StackedItemContents): void;
    getBurnProgress(): number;
    getLitProgress(): number;
    getRecipeBookType(): RecipeBookType;
    getResultSlot(): Slot;
    handlePlacement(useMaxItems: boolean, allowDroppingItemsToClear: boolean, recipe: RecipeHolder<Object>, level: ServerLevel, inventory: (Object | null)[]): RecipeBookMenu$PostPlaceAction;
    isFuel(itemStack: ItemStack): boolean;
    isLit(): boolean;
    quickMoveStack(player: Player, slotIndex: number): ItemStack;
    stillValid(player: Player): boolean;
}