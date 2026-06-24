import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Sorting } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/Sorting.d.ts'
import type { Visibility } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/Visibility.d.ts'
/**
 * ModuleBetterTab
 *
 * @since 12/28/2024
 * @author sqlerrorthing
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBetterTab.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBetterTab.kt:30}
 */
export class ModuleBetterTab extends ClientModule {
    static INSTANCE: ModuleBetterTab;
    static isVisible(visibility: Visibility): boolean;
    readonly showGameMode: boolean;
    readonly sorting: Sorting;
    // private visibility: Visibility[];
    // private /*not mapped: */ getVisibility(): Visibility[];
    isVisible(visibility: Visibility): boolean;
}