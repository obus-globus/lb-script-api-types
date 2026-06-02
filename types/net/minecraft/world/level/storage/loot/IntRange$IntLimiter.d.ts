import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LootContext } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
export interface IntRange$IntLimiter extends Object{
    apply(context: LootContext, value: number): number;
}