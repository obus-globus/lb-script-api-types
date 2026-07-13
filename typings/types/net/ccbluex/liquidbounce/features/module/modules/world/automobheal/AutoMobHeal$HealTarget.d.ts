import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { AutoMobHeal$HealPlan } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal$HealPlan.d.ts'
import type { AutoMobHeal$HealTarget$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal$HealTarget$Companion.d.ts'
import type { AutoMobHeal$HealTarget$SimpleHealFoodTarget } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal$HealTarget$SimpleHealFoodTarget.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { Entity } from '../../../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { CamelHusk } from '../../../../../../../../net/minecraft/world/entity/animal/camel/CamelHusk.d.ts'
import type { Llama } from '../../../../../../../../net/minecraft/world/entity/animal/equine/Llama.d.ts'
import type { ZombieHorse } from '../../../../../../../../net/minecraft/world/entity/animal/equine/ZombieHorse.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class AutoMobHeal$HealTarget<T extends LivingEntity> extends ToggleableValueGroup {
    /**
     * @see CamelHusk.isFood
     * @see Camel.handleEating
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal.kt#L388 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal.kt:388}
     */
    static CamelHuskTarget: AutoMobHeal$HealTarget$SimpleHealFoodTarget<CamelHusk>;
    static Companion: AutoMobHeal$HealTarget$Companion;
    /**
     * @see Llama.handleEating
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal.kt#L374 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal.kt:374}
     */
    static LlamaTarget: AutoMobHeal$HealTarget$SimpleHealFoodTarget<Llama>;
    /**
     * @see ZombieHorse.mobInteract
     * @see AbstractHorse.handleEating
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal.kt#L362 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/automobheal/AutoMobHeal.kt:362}
     */
    static ZombieHorseTarget: AutoMobHeal$HealTarget$SimpleHealFoodTarget<ZombieHorse>;
    protected constructor(name: string, entityClass: Class<T>)
    // private entityClass: Class<T>;
    // private healthThreshold: number;
    // private /*not mapped: */ getHealthThreshold(): number;
    protected canInteract(entity: T): boolean;
    // private cast(entity: Entity): T | null;
    findPlan(maxRangeSq: number, eyePosition: Vec3): AutoMobHeal$HealPlan | null;
    protected findSlot(entity: T): HotbarItemSlot | null;
    protected shouldHeal(entity: T, minHealthRatio: number): boolean;
}