import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EntityType } from '../../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { MobCategory } from '../../../../../../net/minecraft/world/entity/MobCategory.d.ts'
import type { BehaviorControl } from '../../../../../../net/minecraft/world/entity/ai/behavior/BehaviorControl.d.ts'
import type { OneShot } from '../../../../../../net/minecraft/world/entity/ai/behavior/OneShot.d.ts'
export class SetEntityLookTarget extends Object {
    static create(paramcategory: MobCategory, parammaxDist: number): BehaviorControl<LivingEntity>;
    static create(parammaxDist: number): OneShot<LivingEntity>;
    static create(parampredicate: (param0: LivingEntity) => boolean, parammaxDist: number): OneShot<LivingEntity>;
    static create(paramtype: EntityType<Object>, parammaxDist: number): OneShot<LivingEntity>;
    constructor()
}