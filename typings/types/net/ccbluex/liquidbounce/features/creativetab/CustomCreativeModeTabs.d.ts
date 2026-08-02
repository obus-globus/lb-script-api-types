import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * LiquidBounce Creative Item Groups with useful items and blocks
 *
 * @depends FabricAPI (for page buttons)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/ee595b88333a1dc2ff3055eb6be0860bbedcbdb3/src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/CustomCreativeModeTabs.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/CustomCreativeModeTabs.kt:30}
 */
export class CustomCreativeModeTabs extends Object {
    static INSTANCE: CustomCreativeModeTabs;
    // private isInitialized: boolean;
    /**
     * Since 1.20 we need to set this up at a more precise timing than just when the client starts.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/ee595b88333a1dc2ff3055eb6be0860bbedcbdb3/src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/CustomCreativeModeTabs.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/creativetab/CustomCreativeModeTabs.kt:37}
     */
    init(): void;
}