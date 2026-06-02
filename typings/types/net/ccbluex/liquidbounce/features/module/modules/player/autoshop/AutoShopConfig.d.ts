import type { Gson } from '../../../../../../../../com/google/gson/Gson.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ShopConfigPreset } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/ShopConfigPreset.d.ts'
export class AutoShopConfig extends Object {
    static INSTANCE: AutoShopConfig;
    // private autoShopGson: Gson;
    load(shopConfigPreset: ShopConfigPreset): boolean;
    /**
     * Loads {@link shopConfigPreset} and displays a notification depending on the result
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/AutoShopConfig.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/AutoShopConfig.kt:42}
     */
    loadAutoShopConfig(shopConfigPreset: ShopConfigPreset): boolean;
}