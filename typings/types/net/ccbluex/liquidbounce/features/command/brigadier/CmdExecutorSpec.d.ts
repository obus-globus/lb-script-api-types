import type { Command } from '../../../../../../com/mojang/brigadier/Command.d.ts'
import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KAsyncCommand$Handler } from '../../../../../../net/ccbluex/liquidbounce/features/command/KAsyncCommand$Handler.d.ts'
import type { ChainElement } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ChainElement.d.ts'
import type { ClientCommandSource } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * A command executor declared by either {@link CmdLiteralScope.exec} or
 * {@link CmdChainScope.exec}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt#L168 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt:168}
 */
export class CmdExecutorSpec extends Object implements ChainElement {
    constructor(command: (param0: CommandContext<ClientCommandSource>) => number)
    constructor(allowParallel: boolean, handler: KAsyncCommand$Handler<ClientCommandSource>)
    command: (param0: CommandContext<ClientCommandSource>) => number;
}