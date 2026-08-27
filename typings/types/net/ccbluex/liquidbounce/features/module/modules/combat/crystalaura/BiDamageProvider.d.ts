import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DamageProvider } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.d.ts'
export abstract class BiDamageProvider extends Object implements DamageProvider {
    constructor(damage: number, damage1: number)
    readonly damage: number;
    readonly damage1: number;
    /**
     * The possible predicted value is more important.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.kt:73}
     */
    getFixed(): number;
    isAnyGreaterThanOrEqual(float: number): boolean;
    isGreaterThan(float: number): boolean;
    isSmallerThan(float: number): boolean;
    isSmallerThanOrEqual(float: number): boolean;
    isSmallerThanOrEqual(other: DamageProvider): boolean;
}