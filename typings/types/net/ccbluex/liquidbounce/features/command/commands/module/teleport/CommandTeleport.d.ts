import type { CommandDispatcher } from '../../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * Teleport Command
 *
 * Allows you to teleport.
 *
 * Accepts vanilla coordinate semantics: absolute (`100 64 -200`), relative to the
 * player (`~ ~ ~`, `~5 ~-2 ~`) and local to the look direction (`^ ^ ^5`). An optional
 * trailing boolean (`true`/`yes`/`on`) replaces Y with the module's HighTP amount.
 *
 * Module: {@link ModuleTeleport}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandTeleport.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/teleport/CommandTeleport.kt:41}
 */
export class CommandTeleport extends Object implements CommandRegistrar {
    static INSTANCE: CommandTeleport;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}