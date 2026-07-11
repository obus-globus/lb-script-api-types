import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UuidExtensionsKt extends Object {
    /**
     * Convert UUID to 16 bytes array
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt:28}
     */
    static toByteArray(uUID: UUID): number[];
    /**
     * Convert UUID to 16 bytes array and then to MD5 hash
     *
     * Compatible with Rust equivalent of hex::encode(*md5::compute(id.as_bytes()))
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt:41}
     */
    static toMD5(uUID: UUID): string;
}