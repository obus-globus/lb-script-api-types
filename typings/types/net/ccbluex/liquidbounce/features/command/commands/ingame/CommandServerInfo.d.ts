import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { CommandServerInfo$DetectionType } from '../../../../../../../net/ccbluex/liquidbounce/features/command/commands/ingame/CommandServerInfo$DetectionType.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandServerInfo.kt#L64 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandServerInfo.kt:64}
 */
export class CommandServerInfo extends Object implements EventListener, Command$Factory {
    static INSTANCE: CommandServerInfo;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    readonly running: boolean;
    children(): EventListener[];
    createCommand(): Command;
    parent(): EventListener | null;
    // private printHostingInformation(command: Command): void;
    // private printInformation(command: Command, detections: CommandServerInfo$DetectionType[]): void;
    // private printPluginInformation(command: Command): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private runActiveDetection(command: Command, detectionTypes: CommandServerInfo$DetectionType[], $completion: Continuation<void>): any;
    unregister(): void;
}