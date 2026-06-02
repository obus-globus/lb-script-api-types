import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ConversionParams } from '../../../../../../../net/minecraft/world/entity/ConversionParams.d.ts'
import type { Mob } from '../../../../../../../net/minecraft/world/entity/Mob.d.ts'
export interface ServerLivingEntityEvents$MobConversion extends Object{
    onConversion(arg0: Mob, arg1: Mob, arg2: ConversionParams): void;
}