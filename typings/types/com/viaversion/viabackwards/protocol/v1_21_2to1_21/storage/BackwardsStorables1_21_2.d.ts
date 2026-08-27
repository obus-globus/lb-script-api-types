import type { InventoryStateIdStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_2to1_21/storage/InventoryStateIdStorage.d.ts'
import type { ItemTagStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_2to1_21/storage/ItemTagStorage.d.ts'
import type { PlayerStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_2to1_21/storage/PlayerStorage.d.ts'
import type { RecipeStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_2to1_21/storage/RecipeStorage.d.ts'
import type { SignStorage } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_2to1_21/storage/SignStorage.d.ts'
import type { ProtocolStorablesBase } from '../../../../../../com/viaversion/viaversion/connection/ProtocolStorablesBase.d.ts'
import type { ClientVehicleStorage } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/storage/ClientVehicleStorage.d.ts'
export class BackwardsStorables1_21_2 extends ProtocolStorablesBase {
    constructor()
    // private inventoryStateIdStorage: InventoryStateIdStorage;
    // private itemTagStorage: ItemTagStorage;
    // private playerStorage: PlayerStorage;
    clientVehicleStorage(): ClientVehicleStorage;
    inventoryStateIdStorage(): InventoryStateIdStorage;
    itemTagStorage(): ItemTagStorage;
    playerStorage(): PlayerStorage;
    recipeStorage(): RecipeStorage;
    setClientVehicleStorage(arg0: ClientVehicleStorage): void;
    setRecipeStorage(arg0: RecipeStorage): void;
    setSignStorage(arg0: SignStorage): void;
    signStorage(): SignStorage;
}