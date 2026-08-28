import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * TPS (ticks per second) Command
 *
 * Allows you to see the current TPS.
 *
 * This will not work on all servers as some servers modify the {@link ClientboundSetTimePacket} behavior.
 *
 * @author ccetl
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandTps.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandTps.kt:42}
 */
export class CommandTps extends Object implements CommandRegistrar {
    static INSTANCE: CommandTps;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}