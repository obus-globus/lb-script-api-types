import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Config Command
 *
 * Provides various subcommands related to the configuration,
 * such as loading configuration from an external source or an API
 * and listing available configurations.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandConfig.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandConfig.kt:68}
 */
export class CommandConfig extends Object implements Command$Factory {
    static INSTANCE: CommandConfig;
    // private CONFIGS_URL: string;
    // private browseSubcommand(): Command;
    createCommand(): Command;
    // private hoverText(settingName: string): Component;
    // private listSubcommand(): Command;
    // private loadSubcommand(): Command;
    // private reloadSubcommand(): Command;
}