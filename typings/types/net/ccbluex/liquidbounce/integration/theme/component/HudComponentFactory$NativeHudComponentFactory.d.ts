import type { HudComponent } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponent.d.ts'
import type { HudComponentFactory } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.d.ts'
/**
 * Factory for creating native components from a function.
 *
 * @param name Component name
 * @param enabled Whether the component is enabled
 * @param function Function producing the component
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f0d427e933b0c39374cea4bd371582db202074f3/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.kt#L71 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.kt:71}
 */
export class HudComponentFactory$NativeHudComponentFactory extends HudComponentFactory {
    constructor(name: string, enabled: boolean, singleton: boolean, function_: () => HudComponent)
    readonly enabled: boolean;
    // private function: () => HudComponent;
    readonly name: string;
    readonly singleton: boolean;
    createComponent(): HudComponent;
}