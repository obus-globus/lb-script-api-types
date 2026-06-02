import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RandomSource } from '../../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ApplyBonusCount$Formula } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ApplyBonusCount$Formula.d.ts'
import type { ApplyBonusCount$FormulaType } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/ApplyBonusCount$FormulaType.d.ts'
export class ApplyBonusCount$UniformBonusCount extends Record implements ApplyBonusCount$Formula {
    static CODEC: Codec<ApplyBonusCount$UniformBonusCount>;
    static TYPE: ApplyBonusCount$FormulaType;
    // private bonusMultiplier: number;
    bonusMultiplier(): number;
    calculateNewCount(random: RandomSource, count: number, level: number): number;
    equals(o: Object | null): boolean;
    getType(): ApplyBonusCount$FormulaType;
    hashCode(): number;
    toString(): string;
}