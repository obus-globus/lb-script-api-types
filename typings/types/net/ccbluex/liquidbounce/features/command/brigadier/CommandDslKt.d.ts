import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientCommandSource } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { CmdArg } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdArg.d.ts'
export class CommandDslKt extends Object {
    /**
     * Reads a typed DSL argument directly from a Brigadier context.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt#L72 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDsl.kt:72}
     */
    static get<T extends unknown>(self: CommandContext<ClientCommandSource>, argument: CmdArg<T>): T;
}