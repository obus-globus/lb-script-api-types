import type { CustomCreativeModeTab } from '../../../../../../net/ccbluex/liquidbounce/features/creativetab/CustomCreativeModeTab.d.ts'
import type { HeadsCreativeModeTab$Companion } from '../../../../../../net/ccbluex/liquidbounce/features/creativetab/tabs/HeadsCreativeModeTab$Companion.d.ts'
export class HeadsCreativeModeTab extends CustomCreativeModeTab {
    static Companion: HeadsCreativeModeTab$Companion;
    /**
     * The API endpoint to fetch heads from which is owned by CCBlueX
     * and therefore can reliably depend on.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/tabs/HeadsCreativeModeTab.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/tabs/HeadsCreativeModeTab.kt:105}
     */
    static HEAD_DB_API: string;
    constructor()
}