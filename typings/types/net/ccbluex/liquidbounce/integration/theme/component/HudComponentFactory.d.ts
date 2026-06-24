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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.kt:77}
     */
    createComponent(): HudComponent;
}