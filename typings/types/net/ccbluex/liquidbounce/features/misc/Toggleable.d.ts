import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Toggleable extends Object{
    enabled: boolean;
    /**
     * Will be called when the state is toggled off.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/Toggleable.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/Toggleable.kt:48}
     */
    onDisabled(): void;
    /**
     * Will be called when the state is toggled on.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/Toggleable.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/Toggleable.kt:43}
     */
    onEnabled(): void;
    /**
     * The listener that will be called when the state is toggled. By default, it will
     * simply call {@link onEnabled} or {@link onDisabled} depending on the state.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/Toggleable.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/Toggleable.kt:30}
     */
    onToggled(state: boolean): boolean;
}