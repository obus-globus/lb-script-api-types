import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UuidExtensionsKt extends Object {
    /**
     * Convert UUID to 16 bytes array
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt:29}
     */
    static toByteArray(self: UUID): number[];
    /**
     * Convert UUID to 16 bytes array and then to MD5 hash
     *
     * Compatible with Rust equivalent of hex::encode(*md5::compute(id.as_bytes()))
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt:42}
     */
    static toMD5(self: UUID): string;
    static toUndashedString(self: UUID): string;
}