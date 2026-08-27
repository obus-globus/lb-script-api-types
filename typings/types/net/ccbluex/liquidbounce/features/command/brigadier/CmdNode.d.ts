import type { ArgumentBuilder } from '../../../../../../com/mojang/brigadier/builder/ArgumentBuilder.d.ts'
import type { LiteralArgumentBuilder } from '../../../../../../com/mojang/brigadier/builder/LiteralArgumentBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientCommandSource } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * Internal command-tree node compiled into a Brigadier builder.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt:31}
 */
export interface CmdNode extends Object{
    attachTo(parent: LiteralArgumentBuilder<ClientCommandSource>): void;
    toBuilder(): ArgumentBuilder<ClientCommandSource, any>;
}