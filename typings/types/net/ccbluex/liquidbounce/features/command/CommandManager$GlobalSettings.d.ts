import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class CommandManager$GlobalSettings extends ValueGroup {
    static INSTANCE: CommandManager$GlobalSettings;
    /**
     * How many hints should we give for unknown commands?
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f0d427e933b0c39374cea4bd371582db202074f3/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L120 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:120}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f0d427e933b0c39374cea4bd371582db202074f3/src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt#L115 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/CommandManager.kt:115}
     */
    prefix: string;
}