import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { Command$Handler } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command$Handler.d.ts'
import type { Parameter } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter.d.ts'
import type { CommandBuilder$Companion } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/CommandBuilder$Companion.d.ts'
import type { MinecraftShortcuts } from '../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
export class CommandBuilder extends Object implements MinecraftShortcuts {
    static Companion: CommandBuilder$Companion;
    static begin(name: string): CommandBuilder;
    private constructor(name: string)
    // private aliases: string[] | null;
    // private executable: boolean;
    // private handler: Command$Handler | null;
    // private ingame: boolean;
    readonly name: string;
    // private parameters: Parameter<Object>[];
    // private subcommands: Command[];
    alias(...aliases: string[]): CommandBuilder;
    build(): Command;
    handler(handler: Command$Handler): CommandBuilder;
    /**
     * If a command is marked as a hub command, it is impossible to execute it.
     *
     * For example, <code>.friend</code>
     *
     * The command _friend_ would not be executable since it just acts as a
     * hub for its subcommands
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.kt:78}
     */
    hub(): CommandBuilder;
    parameter(parameter: Parameter<Object>): CommandBuilder;
    /**
     * Doesn't allow the command do be executed if either the world or the player are `null`.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.kt:66}
     */
    requiresIngame(): CommandBuilder;
    subcommand(subcommand: Command): CommandBuilder;
    subcommand(subcommandFactory: Command$Factory): CommandBuilder;
}