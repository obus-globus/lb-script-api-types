import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../../../../../java/util/Comparator.d.ts'
import type { AutoMobHeal$FoodCandidate } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal$FoodCandidate.d.ts'
import type { AutoMobHeal$HealTarget } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal$HealTarget.d.ts'
import type { AutoMobHeal$HealTarget$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal$HealTarget$Companion.d.ts'
import type { AutoMobHeal$HealTarget$SimpleHealFoodTarget } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal$HealTarget$SimpleHealFoodTarget.d.ts'
import type { MobFoodOption } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/MobFoodOption.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { CamelHusk } from '../../../../../../../../net/minecraft/world/entity/animal/camel/CamelHusk.d.ts'
import type { Llama } from '../../../../../../../../net/minecraft/world/entity/animal/equine/Llama.d.ts'
import type { ZombieHorse } from '../../../../../../../../net/minecraft/world/entity/animal/equine/ZombieHorse.d.ts'
export class AutoMobHeal$HealTarget$FoodHealTarget<T extends LivingEntity> extends AutoMobHeal$HealTarget<T> {
    static CamelHuskTarget: AutoMobHeal$HealTarget$SimpleHealFoodTarget<CamelHusk>;
    static Companion: AutoMobHeal$HealTarget$Companion;
    static LlamaTarget: AutoMobHeal$HealTarget$SimpleHealFoodTarget<Llama>;
    static ZombieHorseTarget: AutoMobHeal$HealTarget$SimpleHealFoodTarget<ZombieHorse>;
    constructor(name: string, entityClass: Class<T>)
    // private /*not mapped: */ getAllowBucketFood(): boolean;
    // private noWaste: boolean;
    // private /*not mapped: */ getNoWaste(): boolean;
    // private preferNonBucketFoodAlways: boolean;
    // private /*not mapped: */ getPreferNonBucketFoodAlways(): boolean;
    // private bucketPenalty(candidate: AutoMobHeal$FoodCandidate): number;
    protected findSlot(entity: T): HotbarItemSlot | null;
    // private foodCandidateComparator(missingHealth: number): (param0: AutoMobHeal$FoodCandidate, param1: AutoMobHeal$FoodCandidate) => number;
    protected foodOptions(entity: T): MobFoodOption[];
    // private healingDelta(candidate: AutoMobHeal$FoodCandidate, missingHealth: number): number;
    // private wouldWasteHealing(candidate: AutoMobHeal$FoodCandidate, missingHealth: number): boolean;
}