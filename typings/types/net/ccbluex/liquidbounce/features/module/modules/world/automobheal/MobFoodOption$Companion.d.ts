import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MobFoodOption } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/MobFoodOption.d.ts'
import type { Item } from '../../../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class MobFoodOption$Companion extends Object {
    foodNutritionHeal(stack: ItemStack, multiplier: number): number;
    ofBucket(item: Item): MobFoodOption;
}