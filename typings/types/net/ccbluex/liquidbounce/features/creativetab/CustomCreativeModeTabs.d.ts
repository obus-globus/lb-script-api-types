import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * LiquidBounce Creative Item Groups with useful items and blocks
 *
 * @depends FabricAPI (for page buttons)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/CustomCreativeModeTabs.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/CustomCreativeModeTabs.kt:30}
 */
export class CustomCreativeModeTabs extends Object {
    static INSTANCE: CustomCreativeModeTabs;
    // private isInitialized: boolean;
    /**
     * Since 1.20 we need to set this up at a more precise timing than just when the client starts.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/CustomCreativeModeTabs.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/CustomCreativeModeTabs.kt:37}
     */
    init(): void;
}