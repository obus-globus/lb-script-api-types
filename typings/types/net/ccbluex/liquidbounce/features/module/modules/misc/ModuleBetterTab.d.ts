import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Sorting } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/Sorting.d.ts'
import type { Visibility } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/Visibility.d.ts'
/**
 * ModuleBetterTab
 *
 * @author sqlerrorthing
 *
 * @since 12/28/2024
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBetterTab.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBetterTab.kt:37}
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