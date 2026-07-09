import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class IdentifierExtensionKt extends Object {
    /**
     * Creates an {@link net.minecraft.resources.Identifier} starts with {@link CLIENT_NAME}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/IdentifierExtension.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/IdentifierExtension.kt:29}
     */
    static clientIdentifier(path: string): Identifier;
    /**
     * Converts an {@link Identifier} to a human-readable name without localization.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/IdentifierExtension.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/IdentifierExtension.kt:35}
     */
    static toName(identifier: Identifier): string;
}