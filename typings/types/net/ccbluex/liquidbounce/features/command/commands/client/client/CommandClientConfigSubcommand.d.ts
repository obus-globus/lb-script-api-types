import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Config } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
/**
 * Configurable Management Command
 *
 * Allows you to back up, restore, reset, and browse configurations.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClientConfigSubcommand.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClientConfigSubcommand.kt:43}
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