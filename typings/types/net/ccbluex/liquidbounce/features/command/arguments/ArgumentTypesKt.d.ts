import type { StringReader } from '../../../../../../com/mojang/brigadier/StringReader.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ArgumentTypesKt extends Object {
    /**
     * Reads every remaining whitespace-separated token of {@link reader}, translating each one
     * through {@link parseToken}. The callback validates the token and throws a
     * {@link com.mojang.brigadier.exceptions.CommandSyntaxException} on invalid input.
     *
     * This is the shared parsing skeleton of the greedy multi-value argument types
     * ({@link MultiTaggedArgumentType} and the script multi-value validator), which all consume
     * one token per value and report errors per token.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ArgumentTypes.kt#L173 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/arguments/ArgumentTypes.kt:173}
     */
    static readGreedyTokens<T extends unknown>(reader: StringReader, parseToken: (param0: string) => T): T[];
}