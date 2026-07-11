import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Marketplace command
 *
 * Allows interacting with the LiquidBounce Marketplace
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/CommandMarketplace.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/CommandMarketplace.kt:31}
 */
export class CommandMarketplace extends Object implements Command$Factory {
    static INSTANCE: CommandMarketplace;
    createCommand(): Command;
}