import type { ChoiceListValue } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/ChoiceListValue.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleCustomAmbience$TimeType } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience$TimeType.d.ts'
import type { ModuleCustomAmbience$WeatherType } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience$WeatherType.d.ts'
/**
 * CustomAmbience module
 *
 * Override the ambience of the game
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience.kt:32}
 */
export class ModuleCustomAmbience extends ClientModule {
    static INSTANCE: ModuleCustomAmbience;
    static getWorldClockTime(original: number): number;
    // private time: ChoiceListValue<ModuleCustomAmbience$TimeType>;
    readonly weather: ChoiceListValue<ModuleCustomAmbience$WeatherType>;
    getWorldClockTime(original: number): number;
}