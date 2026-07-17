import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class IdentifierExtensionKt extends Object {
    /**
     * Creates an {@link net.minecraft.resources.Identifier} starts with {@link CLIENT_NAME}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/IdentifierExtension.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/IdentifierExtension.kt:29}
     */
    static clientIdentifier(path: string): Identifier;
    /**
     * Converts an {@link Identifier} to a human-readable name without localization.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/IdentifierExtension.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/IdentifierExtension.kt:35}
     */
    static toName(self: Identifier): string;
}