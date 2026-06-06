import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface DamageProvider extends Object{
    /**
     * Returns the most important damage value that should also be used for comparison.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.kt:32}
     */
    getFixed(): number;
    /**
     * Any because it's used for death prevention.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/DamageProvider.kt:27}
     */
    isAnyGreaterThanOrEqual(float: number): boolean;
    isGreaterThan(float: number): boolean;
    isSmallerThan(float: number): boolean;
    isSmallerThanOrEqual(float: number): boolean;
    isSmallerThanOrEqual(other: DamageProvider): boolean;
}