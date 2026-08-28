import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class CommandManager$GlobalSettings extends ValueGroup {
    static INSTANCE: CommandManager$GlobalSettings;
    /**
     * How many hints should we give for unknown commands?
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L120 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:120}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L115 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:115}
     */
    prefix: string;
}