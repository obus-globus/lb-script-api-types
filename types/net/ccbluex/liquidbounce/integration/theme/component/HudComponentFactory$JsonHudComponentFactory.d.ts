import type { JsonObject } from '../../../../../../com/google/gson/JsonObject.d.ts'
import type { HudComponentFactory } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.d.ts'
import type { HudComponentTweak } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponentTweak.d.ts'
import type { WebHudComponent } from '../../../../../../net/ccbluex/liquidbounce/integration/theme/component/components/WebHudComponent.d.ts'
/**
 * Factory for creating components from JSON deserialization.
 *
 * @param name Component name
 * @param enabled Whether the component is enabled
 * @param alignment JSON alignment data
 * @param tweaks Optional tweaks array
 * @param values Optional values array
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/HudComponentFactory.kt:33}
 */
export class HudComponentFactory$JsonHudComponentFactory extends HudComponentFactory {
    constructor(name: string, enabled: boolean, singleton: boolean, alignment: JsonObject, tweaks: HudComponentTweak[] | null, values: JsonObject[] | null)
    // private alignment: JsonObject;
    readonly enabled: boolean;
    readonly name: string;
    readonly singleton: boolean;
    // private tweaks: HudComponentTweak[] | null;
    // private values: JsonObject[] | null;
    createComponent(): WebHudComponent;
}