import type { MultiChoiceListValue } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/MultiChoiceListValue.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { DoRender } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/DoRender.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
/**
 * AntiBlind module
 *
 * Protects you from potentially annoying screen effects that block your view.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAntiBlind.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAntiBlind.kt:28}
 */
export class ModuleAntiBlind extends ClientModule {
    static INSTANCE: ModuleAntiBlind;
    /**
     * @see Items.CARVED_PUMPKIN
     * @see Gui.renderCameraOverlays
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAntiBlind.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAntiBlind.kt:35}
     */
    static TEXTURE_PUMPKIN_BLUR: Identifier;
    static canRender(choice: DoRender): boolean;
    TEXTURE_PUMPKIN_BLUR: Identifier;
    // private fireOpacity: number;
    // private /*not mapped: */ getFireOpacity(): number;
    readonly fireOpacityPercentage: number;
    // private render: MultiChoiceListValue<DoRender>;
    canRender(choice: DoRender): boolean;
}