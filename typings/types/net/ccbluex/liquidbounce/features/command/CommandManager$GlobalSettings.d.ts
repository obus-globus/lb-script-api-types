import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class CommandManager$GlobalSettings extends ValueGroup {
    static INSTANCE: CommandManager$GlobalSettings;
    /**
     * How many hints should we give for unknown commands?
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L113 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:113}
     */
    readonly hintCount: number;
    /**
     * The prefix of the commands.
     *
     * ```
     * .friend add "Senk Ju"
     * ^
     * ------
     * prefix (.)
     * ```
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L101 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:101}
     */
    prefix: string;
}