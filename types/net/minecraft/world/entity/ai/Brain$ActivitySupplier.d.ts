import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ActivityData } from '../../../../../net/minecraft/world/entity/ai/ActivityData.d.ts'
export interface Brain$ActivitySupplier<E extends LivingEntity> extends Object{
    createActivities(body: E): ActivityData<E>[];
}