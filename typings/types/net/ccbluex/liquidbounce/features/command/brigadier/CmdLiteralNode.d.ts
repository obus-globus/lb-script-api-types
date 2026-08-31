import type { LiteralArgumentBuilder } from '../../../../../../com/mojang/brigadier/builder/LiteralArgumentBuilder.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientCommandSource } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { CmdLiteralScope } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdLiteralScope.d.ts'
import type { CmdNode } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdNode.d.ts'
/**
 * A nested literal compiled as one Brigadier literal builder, plus redirecting aliases.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt#L141 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt:141}
 */
export class CmdLiteralNode extends Object implements CmdNode {
    constructor(name: string, path: string, aliases: string[], block: (param0: CmdLiteralScope) => void)
    // private aliases: string[];
    // private block: (param0: CmdLiteralScope) => void;
    // private name: string;
    // private path: string;
    attachTo(parent: LiteralArgumentBuilder<ClientCommandSource>): void;
    toBuilder(): LiteralArgumentBuilder<ClientCommandSource>;
}