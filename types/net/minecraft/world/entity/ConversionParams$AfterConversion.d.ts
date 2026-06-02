import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Mob } from '../../../../net/minecraft/world/entity/Mob.d.ts'
export interface ConversionParams$AfterConversion<T extends Mob> extends Object{
    finalizeConversion(mob: T): void;
}