import type { RecipeManager1_11_2 } from '../../../../../com/viaversion/viafabricplus/features/recipe/RecipeManager1_11_2.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryAccess$Frozen } from '../../../../../net/minecraft/core/RegistryAccess$Frozen.d.ts'
import type { AbstractContainerMenu } from '../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
export class Recipes1_11_2 extends Object {
    static getRecipeManager(paramarg0: RegistryAccess$Frozen): RecipeManager1_11_2;
    static init(): void;
    static reset(): void;
    static setCraftingResultSlot(paramarg0: number, paramarg1: AbstractContainerMenu, paramarg2: (Object | null)[]): void;
    constructor()
}