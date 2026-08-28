import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ClientStringArgumentTypeKt extends Object {
    /**
     * Quoted string (same rules as {@link StringReader.readString}) or, if unquoted, an
     * {@link readUnquotedToken} that accepts any non-space character.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientStringArgumentType.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientStringArgumentType.kt:44}
     */
    static readClientString(self: StringReader): string;
    /**
     * Reads the next unquoted token: every character up to the next space (or end of input).
     *
     * Brigadier's {@link StringReader.readUnquotedString} only accepts `[0-9A-Za-z_.+-]`, which
     * truncates non-ASCII input such as Chinese module or player names. Client commands
     * historically split on spaces only, so this restores that contract.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientStringArgumentType.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientStringArgumentType.kt:32}
     */
    static readUnquotedToken(self: StringReader): string;
}