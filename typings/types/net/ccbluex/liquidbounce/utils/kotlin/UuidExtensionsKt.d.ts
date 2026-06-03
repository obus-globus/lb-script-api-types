import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UuidExtensionsKt extends Object {
    /**
     * Convert UUID to 16 bytes array
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt:25}
     */
    static toByteArray(uUID: UUID): number[];
    /**
     * Convert UUID to 16 bytes array and then to MD5 hash
     *
     * Compatible with Rust equivalent of hex::encode(*md5::compute(id.as_bytes()))
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt:36}
     */
    static toMD5(uUID: UUID): string;
}