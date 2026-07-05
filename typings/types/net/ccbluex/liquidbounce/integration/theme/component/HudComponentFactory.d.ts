import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HudComponent } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponent.d.ts'
export abstract class HudComponentFactory extends Object {
    constructor()
    readonly enabled: boolean;
    readonly name: string;
    readonly singleton: boolean;
    /**
     * Creates the component instance.
     *
     * @returns Component instance
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.kt#L82 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.kt:82}
     */
    createComponent(): HudComponent;
}