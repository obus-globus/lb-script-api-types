import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { File } from '../../../../../../../java/io/File.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * LocalConfig Command
 *
 * Allows you to load, list, and create local configurations.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandLocalConfig.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandLocalConfig.kt:78}
 */
export class CommandLocalConfig extends Object implements CommandRegistrar {
    static INSTANCE: CommandLocalConfig;
    // private hoverText(file: File, settingName: string): Component;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}