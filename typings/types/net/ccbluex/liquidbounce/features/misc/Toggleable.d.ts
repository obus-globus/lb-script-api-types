import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Toggleable extends Object{
    enabled: boolean;
    /**
     * Will be called when the state is toggled off.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/Toggleable.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/Toggleable.kt:48}
     */
    onDisabled(): void;
    /**
     * Will be called when the state is toggled on.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/Toggleable.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/Toggleable.kt:43}
     */
    onEnabled(): void;
    /**
     * The listener that will be called when the state is toggled. By default, it will
     * simply call {@link onEnabled} or {@link onDisabled} depending on the state.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/Toggleable.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/Toggleable.kt:30}
     */
    onToggled(state: boolean): boolean;
}