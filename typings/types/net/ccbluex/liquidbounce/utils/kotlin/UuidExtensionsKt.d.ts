import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UuidExtensionsKt extends Object {
    /**
     * Convert UUID to 16 bytes array
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt:29}
     */
    static toByteArray(uUID: UUID): number[];
    /**
     * Convert UUID to 16 bytes array and then to MD5 hash
     *
     * Compatible with Rust equivalent of hex::encode(*md5::compute(id.as_bytes()))
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/UuidExtensions.kt:42}
     */
    static toMD5(uUID: UUID): string;
    static toUndashedString(uUID: UUID): string;
}