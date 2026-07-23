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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandConfig.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandConfig.kt:68}
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