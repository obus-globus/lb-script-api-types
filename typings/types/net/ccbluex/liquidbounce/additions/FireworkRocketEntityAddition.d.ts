import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export interface FireworkRocketEntityAddition extends Object{
    liquidbounce$getShooter(): LivingEntity | null;
}