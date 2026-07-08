import type { Gson } from '../../../../../../../../com/google/gson/Gson.d.ts'
import type { Reader } from '../../../../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ShopConfigPreset } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autoshop/ShopConfigPreset.d.ts'
export class AutoShopConfig extends Object {
    static INSTANCE: AutoShopConfig;
    // private autoShopGson: Gson;
    // private load(reader: Reader): boolean;
    /**
     * Loads {@link shopConfigPreset} and displays a notification depending on the result
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/AutoShopConfig.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autoshop/AutoShopConfig.kt:46}
     */
    loadAutoShopConfig(shopConfigPreset: ShopConfigPreset): boolean;
}