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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.kt#L82 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.kt:82}
     */
    createComponent(): HudComponent;
}