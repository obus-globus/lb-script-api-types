import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../../../java/lang/Comparable.d.ts'
import type { EndCrystal } from '../../../../../../../../../net/minecraft/world/entity/boss/enderdragon/EndCrystal.d.ts'
export class CrystalAuraDestroyTargetFactory$ComparisonListEntry extends Object implements Comparable<CrystalAuraDestroyTargetFactory$ComparisonListEntry> {
    constructor(crystalEntity: EndCrystal, selfDamage: number, enemyDamage: number)
    readonly crystalEntity: EndCrystal;
    readonly enemyDamage: number;
    readonly selfDamage: number;
    compareTo(other: CrystalAuraDestroyTargetFactory$ComparisonListEntry): number;
}