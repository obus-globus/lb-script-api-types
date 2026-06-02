import type { BiDamageProvider } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/BiDamageProvider.d.ts'
import type { DamageProvider } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.d.ts'
export class OrBiDamageProvider extends BiDamageProvider {
    constructor(damage: number, damage1: number)
    isAnyGreaterThanOrEqual(float: number): boolean;
    isGreaterThan(float: number): boolean;
    isSmallerThan(float: number): boolean;
    isSmallerThanOrEqual(float: number): boolean;
    isSmallerThanOrEqual(other: DamageProvider): boolean;
}