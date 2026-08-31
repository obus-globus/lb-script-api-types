import type { ChoiceListValue } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/ChoiceListValue.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleCustomAmbience$TimeType } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/customambience/ModuleCustomAmbience$TimeType.d.ts'
import type { ModuleCustomAmbience$WeatherType } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/customambience/ModuleCustomAmbience$WeatherType.d.ts'
/**
 * CustomAmbience module
 *
 * Override the ambience of the game
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/customambience/ModuleCustomAmbience.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/customambience/ModuleCustomAmbience.kt:40}
 */
export class ModuleCustomAmbience extends ClientModule {
    static INSTANCE: ModuleCustomAmbience;
    static getWorldClockTime(original: number): number;
    // private time: ChoiceListValue<ModuleCustomAmbience$TimeType>;
    readonly weather: ChoiceListValue<ModuleCustomAmbience$WeatherType>;
    getWorldClockTime(original: number): number;
}