import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * ServerInfo Command
 *
 * Displays the current server information, including:
 * - Server Address (Typed In)
 * - Resolved Server Address
 * - Server ID
 * - Server Type (Premium or Cracked)
 * - Server Brand (Brand that the server sent us, F3 menu)
 * - Advertised Version (Version that the server sent us)
 * - Detected Version (Gathers actual server version from known packs packet)
 * - TPS (Same as .tps)
 * - Ping (Same as .ping)
 * - Payload Channels
 * - Transactions (5x ping payloads)
 * - Transaction Differences
 * - Guessed Anti Cheat (Same as AntiCheatDetect)
 * - Hosting Information (Shown when command is being executed with hosting parameter)
 * - Plugins (Same as Plugins Module, requires plugins detect parameter)
 *
 * The command supports active detection modes for more thorough analysis.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandServerInfo.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandServerInfo.kt:73}
 */
export class CommandServerInfo extends Object implements EventListener, CommandRegistrar {
    static INSTANCE: CommandServerInfo;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    readonly running: boolean;
    children(): EventListener[];
    parent(): EventListener | null;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
    unregister(): void;
}