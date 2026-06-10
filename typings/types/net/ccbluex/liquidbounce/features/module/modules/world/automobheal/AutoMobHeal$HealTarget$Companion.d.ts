import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AutoMobHeal$HealTarget$SimpleHealFoodTarget } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal$HealTarget$SimpleHealFoodTarget.d.ts'
import type { ToFloatFunction } from '../../../../../../../../net/minecraft/util/ToFloatFunction.d.ts'
import type { CamelHusk } from '../../../../../../../../net/minecraft/world/entity/animal/camel/CamelHusk.d.ts'
import type { Llama } from '../../../../../../../../net/minecraft/world/entity/animal/equine/Llama.d.ts'
import type { ZombieHorse } from '../../../../../../../../net/minecraft/world/entity/animal/equine/ZombieHorse.d.ts'
import type { ItemStack } from '../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class AutoMobHeal$HealTarget$Companion extends Object {
    CamelHuskTarget: AutoMobHeal$HealTarget$SimpleHealFoodTarget<CamelHusk>;
    LlamaTarget: AutoMobHeal$HealTarget$SimpleHealFoodTarget<Llama>;
    ZombieHorseTarget: AutoMobHeal$HealTarget$SimpleHealFoodTarget<ZombieHorse>;
    // private healAmount1xNutrition: (param0: ItemStack) => number;
    // private healAmount2xNutrition: (param0: ItemStack) => number;
}