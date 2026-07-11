import type { CustomCreativeModeTab } from '../../../../../../net/ccbluex/liquidbounce/features/creativetab/CustomCreativeModeTab.d.ts'
import type { HeadsCreativeModeTab$Companion } from '../../../../../../net/ccbluex/liquidbounce/features/creativetab/tabs/HeadsCreativeModeTab$Companion.d.ts'
export class HeadsCreativeModeTab extends CustomCreativeModeTab {
    static Companion: HeadsCreativeModeTab$Companion;
    /**
     * The API endpoint to fetch heads from which is owned by CCBlueX
     * and therefore can reliably depend on.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/tabs/HeadsCreativeModeTab.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/tabs/HeadsCreativeModeTab.kt:105}
     */
    static HEAD_DB_API: string;
    constructor()
}