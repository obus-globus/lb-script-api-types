import type { NativeImage } from '../../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { BaseApi } from '../../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
export class CapeApi extends BaseApi {
    static INSTANCE: CapeApi;
    /**
     * Request a cape by name and return the cape texture as {@link NativeImage}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/api/services/cosmetics/CapeApi.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/api/services/cosmetics/CapeApi.kt:29}
     */
    getCape(name: string): NativeImage;
}