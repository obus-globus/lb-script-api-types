import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface DamageProvider extends Object{
    /**
     * Returns the most important damage value that should also be used for comparison.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.kt:35}
     */
    getFixed(): number;
    /**
     * Any because it's used for death prevention.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.kt:30}
     */
    isAnyGreaterThanOrEqual(float: number): boolean;
    isGreaterThan(float: number): boolean;
    isSmallerThan(float: number): boolean;
    isSmallerThanOrEqual(float: number): boolean;
    isSmallerThanOrEqual(other: DamageProvider): boolean;
}