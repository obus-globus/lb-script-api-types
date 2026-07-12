import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { HudComponentFactory } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.d.ts'
import type { HudComponentTweak } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponentTweak.d.ts'
import type { WebHudComponent } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/components/WebHudComponent.d.ts'
/**
 * Factory for creating components from JSON deserialization.
 *
 * @param name Component name
 * @param description Short description of the component
 * @param enabled Whether the component is enabled
 * @param alignment JSON alignment data
 * @param tweaks Optional tweaks array
 * @param values Optional values array
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.kt:43}
 */
export class HudComponentFactory$JsonHudComponentFactory extends HudComponentFactory {
    constructor(name: string, description: string | null, enabled: boolean, singleton: boolean, alignment: JsonObject, tweaks: HudComponentTweak[] | null, values: JsonObject[] | null)
    // private alignment: JsonObject;
    // private description: string | null;
    readonly enabled: boolean;
    readonly name: string;
    readonly singleton: boolean;
    // private tweaks: HudComponentTweak[] | null;
    // private values: JsonObject[] | null;
    createComponent(): WebHudComponent;
}