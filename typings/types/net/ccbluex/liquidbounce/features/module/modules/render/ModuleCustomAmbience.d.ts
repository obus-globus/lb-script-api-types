import type { ChoiceListValue } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/ChoiceListValue.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleCustomAmbience$TimeType } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience$TimeType.d.ts'
import type { ModuleCustomAmbience$WeatherType } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience$WeatherType.d.ts'
/**
 * CustomAmbience module
 *
 * Override the ambience of the game
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience.kt:39}
 */
export class ModuleCustomAmbience extends ClientModule {
    static INSTANCE: ModuleCustomAmbience;
    static getWorldClockTime(original: number): number;
    // private time: ChoiceListValue<ModuleCustomAmbience$TimeType>;
    readonly weather: ChoiceListValue<ModuleCustomAmbience$WeatherType>;
    getWorldClockTime(original: number): number;
}