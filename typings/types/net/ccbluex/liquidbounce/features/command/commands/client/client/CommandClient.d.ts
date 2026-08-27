import type { CommandDispatcher } from '../../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * Client Command
 *
 * Provides subcommands for client management.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt:32}
 */
export class CommandClient extends Object implements CommandRegistrar {
    static INSTANCE: CommandClient;
    /**
     * Registers the client command with a variety of subcommands.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt:37}
     */
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}