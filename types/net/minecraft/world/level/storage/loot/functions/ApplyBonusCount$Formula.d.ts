import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ApplyBonusCount$FormulaType } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ApplyBonusCount$FormulaType.d.ts'
export interface ApplyBonusCount$Formula extends Object{
    calculateNewCount(random: RandomSource, count: number, level: number): number;
    getType(): ApplyBonusCount$FormulaType;
}