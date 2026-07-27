import type { CustomCreativeModeTab } from '../../../../../../net/ccbluex/liquidbounce/features/creativetab/CustomCreativeModeTab.d.ts'
import type { HeadsCreativeModeTab$Companion } from '../../../../../../net/ccbluex/liquidbounce/features/creativetab/tabs/HeadsCreativeModeTab$Companion.d.ts'
export class HeadsCreativeModeTab extends CustomCreativeModeTab {
    static Companion: HeadsCreativeModeTab$Companion;
    /**
     * The API endpoint to fetch heads from which is owned by CCBlueX
     * and therefore can reliably depend on.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/tabs/HeadsCreativeModeTab.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/tabs/HeadsCreativeModeTab.kt:105}
     */
    static HEAD_DB_API: string;
    constructor()
}