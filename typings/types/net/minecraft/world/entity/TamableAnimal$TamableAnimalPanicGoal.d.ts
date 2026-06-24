import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { DamageType } from '../../../../net/minecraft/world/damagesource/DamageType.d.ts'
import type { TamableAnimal } from '../../../../net/minecraft/world/entity/TamableAnimal.d.ts'
import type { PanicGoal } from '../../../../net/minecraft/world/entity/ai/goal/PanicGoal.d.ts'
export class TamableAnimal$TamableAnimalPanicGoal extends PanicGoal {
    static WATER_CHECK_DISTANCE_VERTICAL: number;
    constructor(null_: TamableAnimal, speedModifier: number)
    constructor(null_: TamableAnimal, speedModifier: number, panicCausingDamageTypes: TagKey<DamageType>)
    tick(): void;
}