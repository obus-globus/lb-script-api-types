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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.kt#L85 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.kt:85}
     */
    createComponent(): HudComponent;
}