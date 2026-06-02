import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../../kotlin/Pair.d.ts'
import type { ModuleSmartEat$Estimator$FoodEstimationData } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/ModuleSmartEat$Estimator$FoodEstimationData.d.ts'
import type { HotbarItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { ComparatorChain } from '../../../../../../../net/ccbluex/liquidbounce/utils/sorting/ComparatorChain.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ModuleSmartEat$Estimator extends Object {
    static INSTANCE: ModuleSmartEat$Estimator;
    // private comparator: ComparatorChain<Pair<HotbarItemSlot, ModuleSmartEat$Estimator$FoodEstimationData>>;
    findBestFood(): HotbarItemSlot | null;
    // private getFoodEstimationData(itemStack: ItemStack): ModuleSmartEat$Estimator$FoodEstimationData | null;
}