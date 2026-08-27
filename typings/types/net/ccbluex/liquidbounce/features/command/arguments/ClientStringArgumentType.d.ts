import type { ArgumentType } from '../../../../../../com/mojang/brigadier/arguments/ArgumentType.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Client-command string arguments. Prefer these over Brigadier
 * {@link com.mojang.brigadier.arguments.StringArgumentType.word} / `string()` so unquoted
 * tokens are not limited to the ASCII identifier whitelist.
 *
 * `greedyString()` is unchanged: it already consumes the remainder of the line as-is.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientStringArgumentType.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientStringArgumentType.kt:65}
 */
export class ClientStringArgumentType extends Object {
    static INSTANCE: ClientStringArgumentType;
    /**
     * One token: a quoted string (quotes stripped, escapes honored) or an unquoted
     * {@link readUnquotedToken}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientStringArgumentType.kt#L77 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientStringArgumentType.kt:77}
     */
    static string(): ArgumentType<string>;
    /**
     * One unquoted token. Quotes are literal characters, not grouping.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientStringArgumentType.kt#L70 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ClientStringArgumentType.kt:70}
     */
    static word(): ArgumentType<string>;
    string(): ArgumentType<string>;
    word(): ArgumentType<string>;
}