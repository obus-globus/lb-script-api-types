import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Client Command
 *
 * Provides subcommands for client management.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt:30}
 */
export class CommandClient extends Object implements Command$Factory {
    static INSTANCE: CommandClient;
    /**
     * Creates client command with a variety of subcommands.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/client/CommandClient.kt:35}
     */
    createCommand(): Command;
}