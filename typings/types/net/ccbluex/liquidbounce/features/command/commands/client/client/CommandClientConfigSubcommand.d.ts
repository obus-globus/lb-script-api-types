import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Config } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
/**
 * Configurable Management Command
 *
 * Allows you to back up, restore, reset, and browse configurations.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClientConfigSubcommand.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClientConfigSubcommand.kt:43}
 */
export class CommandClientConfigSubcommand extends Object {
    static INSTANCE: CommandClientConfigSubcommand;
    // private /*not mapped: */ getDefaultConfigs(): Config[];
    // private backupSubcommand(): Command;
    // private browseSubcommand(): Command;
    configCommand(): Command;
    // private resetSubCommand(): Command;
    // private restoreSubcommand(): Command;
}