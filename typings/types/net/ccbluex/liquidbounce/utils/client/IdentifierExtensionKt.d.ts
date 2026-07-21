import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class IdentifierExtensionKt extends Object {
    /**
     * Creates an {@link net.minecraft.resources.Identifier} starts with {@link CLIENT_NAME}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/IdentifierExtension.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/IdentifierExtension.kt:29}
     */
    static clientIdentifier(path: string): Identifier;
    /**
     * Converts an {@link Identifier} to a human-readable name without localization.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/IdentifierExtension.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/IdentifierExtension.kt:35}
     */
    static toName(self: Identifier): string;
}