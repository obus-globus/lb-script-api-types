import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ApplyBonusCount$Formula } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ApplyBonusCount$Formula.d.ts'
import type { ApplyBonusCount$FormulaType } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ApplyBonusCount$FormulaType.d.ts'
export class ApplyBonusCount$BinomialWithBonusCount extends Record implements ApplyBonusCount$Formula {
    static TYPE: ApplyBonusCount$FormulaType;
    private constructor(extraRounds: number, probability: number)
    // private extraRounds: number;
    // private probability: number;
    calculateNewCount(random: RandomSource, count: number, level: number): number;
    equals(o: Object | null): boolean;
    extraRounds(): number;
    getType(): ApplyBonusCount$FormulaType;
    hashCode(): number;
    probability(): number;
    toString(): string;
}