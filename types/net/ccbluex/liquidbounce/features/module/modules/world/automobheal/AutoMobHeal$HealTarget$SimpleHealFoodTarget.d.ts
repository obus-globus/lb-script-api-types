import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { AutoMobHeal$HealTarget$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal$HealTarget$Companion.d.ts'
import type { AutoMobHeal$HealTarget$FoodHealTarget } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal$HealTarget$FoodHealTarget.d.ts'
import type { MobFoodOption } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/MobFoodOption.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { CamelHusk } from '../../../../../../../../net/minecraft/world/entity/animal/camel/CamelHusk.d.ts'
import type { Llama } from '../../../../../../../../net/minecraft/world/entity/animal/equine/Llama.d.ts'
import type { ZombieHorse } from '../../../../../../../../net/minecraft/world/entity/animal/equine/ZombieHorse.d.ts'
export class AutoMobHeal$HealTarget$SimpleHealFoodTarget<T extends LivingEntity> extends AutoMobHeal$HealTarget$FoodHealTarget<T> {
    static CamelHuskTarget: AutoMobHeal$HealTarget$SimpleHealFoodTarget<CamelHusk>;
    static Companion: AutoMobHeal$HealTarget$Companion;
    static LlamaTarget: AutoMobHeal$HealTarget$SimpleHealFoodTarget<Llama>;
    static ZombieHorseTarget: AutoMobHeal$HealTarget$SimpleHealFoodTarget<ZombieHorse>;
    constructor(name: string, entityClass: Class<T>, options: MobFoodOption[])
    // private options: MobFoodOption[];
    protected foodOptions(entity: T): MobFoodOption[];
}