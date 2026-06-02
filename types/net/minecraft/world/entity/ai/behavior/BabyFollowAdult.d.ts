import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { UniformInt } from '../../../../../../net/minecraft/util/valueproviders/UniformInt.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
import type { MemoryModuleType } from '../../../../../../net/minecraft/world/entity/ai/memory/MemoryModuleType.d.ts'
export class BabyFollowAdult extends Object {
    static create(paramfollowRange: UniformInt, paramspeedModifier: number): OneShot<LivingEntity>;
    static create(paramfollowRange: UniformInt, paramspeedModifier: (param0: LivingEntity) => number, paramnearestVisibleType: MemoryModuleType<Object>, paramtargetEye: boolean): OneShot<LivingEntity>;
    constructor()
}