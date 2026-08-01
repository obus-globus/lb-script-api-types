import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DamageProvider } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.d.ts'
export abstract class BiDamageProvider extends Object implements DamageProvider {
    constructor(damage: number, damage1: number)
    readonly damage: number;
    readonly damage1: number;
    /**
     * The possible predicted value is more important.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.kt:73}
     */
    getFixed(): number;
    isAnyGreaterThanOrEqual(float: number): boolean;
    isGreaterThan(float: number): boolean;
    isSmallerThan(float: number): boolean;
    isSmallerThanOrEqual(float: number): boolean;
    isSmallerThanOrEqual(other: DamageProvider): boolean;
}